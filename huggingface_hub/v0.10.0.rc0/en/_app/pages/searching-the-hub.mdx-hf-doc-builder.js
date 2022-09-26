import{S as Ar,i as Tr,s as Pr,e as r,k as h,w as u,t as s,M as Sr,c as o,d as t,m as f,a as n,x as g,h as l,b as p,T as kr,G as a,g as c,y as d,L as Dr,q as m,o as _,B as b,v as Fr}from"../chunks/vendor-hf-doc-builder.js";import{I as Bt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../chunks/CodeBlock-hf-doc-builder.js";function Mr(ii){let M,Rt,C,N,Xe,Z,Va,Ze,es,Gt,L,ts,Ve,as,ss,Jt,I,z,et,V,ls,tt,is,Ut,ee,at,rs,os,Wt,te,Yt,K,ns,ye,cs,hs,Qt,ae,Xt,xe,fs,Zt,B,st,we,ps,us,lt,$e,gs,Vt,Ee,ds,ea,x,it,rt,ms,_s,ot,nt,bs,vs,ct,ht,ys,xs,ft,ws,ta,w,$s,pt,Es,js,ut,ks,As,gt,Ts,Ps,aa,H,R,dt,se,Ss,mt,Ds,sa,v,Fs,_t,Ms,Cs,bt,Is,Hs,je,Os,qs,ke,Ns,Ls,la,le,ia,E,zs,vt,Ks,Bs,yt,Rs,Gs,ra,O,G,xt,ie,Js,wt,Us,oa,Ae,Ws,na,Te,re,Ys,$t,Qs,Xs,ca,J,Zs,Et,Vs,el,ha,oe,fa,j,tl,jt,al,sl,kt,ll,il,pa,U,rl,At,ol,nl,ua,ne,ga,k,cl,Tt,hl,fl,Pt,pl,ul,da,ce,ma,A,gl,St,dl,ml,Dt,_l,bl,_a,Pe,Se,ri,ba,De,Fe,oi,va,T,vl,Me,yl,xl,Ce,wl,$l,ya,he,xa,W,El,Ft,jl,kl,wa,fe,$a,q,Y,Mt,pe,Al,Ct,Tl,Ea,Ie,Pl,ja,He,Sl,ka,Oe,ue,Dl,It,Fl,Ml,Aa,P,Cl,qe,Il,Hl,Ne,Ol,ql,Ta,ge,Pa,$,Ht,Nl,Ll,Ot,zl,Kl,qt,Bl,Rl,Sa,de,Da,S,Gl,Nt,Jl,Ul,Lt,Wl,Yl,Fa,D,Ql,zt,Xl,Zl,Kt,Vl,ei,Ma,me,Ca,Le,ti,Ia,_e,Ha,ze,ai,Oa,be,qa,Ke,si,Na;return Z=new Bt({}),V=new Bt({}),te=new y({props:{code:"pip install huggingface_hub",highlighted:"pip install huggingface_hub"}}),ae=new y({props:{code:`from huggingface_hub import HfApi
api = HfApi()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()`}}),se=new Bt({}),le=new y({props:{code:`from huggingface_hub import ModelSearchArguments, DatasetSearchArguments

model_args = ModelSearchArguments()
dataset_args = DatasetSearchArguments()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelSearchArguments, DatasetSearchArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>model_args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args = DatasetSearchArguments()`}}),ie=new Bt({}),oe=new y({props:{code:"model_args",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_args
Available Attributes <span class="hljs-keyword">or</span> Keys:
 * author
 * dataset
 * language
 * library
 * license
 * model_name
 * pipeline_tag`}}),ne=new y({props:{code:"model_args.library",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_args.library
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
}`}}),pe=new Bt({}),ge=new y({props:{code:`dataset_args = DatasetSearchArguments()
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
 * task_ids`}}),de=new y({props:{code:"dataset_args.task_categories",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_args.task_categories
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
 * zero_shot_retrieval`}}),me=new y({props:{code:'"en" in dataset_args.languages',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">&quot;en&quot;</span> <span class="hljs-keyword">in</span> dataset_args.languages
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
}`}}),{c(){M=r("meta"),Rt=h(),C=r("h1"),N=r("a"),Xe=r("span"),u(Z.$$.fragment),Va=h(),Ze=r("span"),es=s("Searching the Hub Efficiently with Python"),Gt=h(),L=r("p"),ts=s("In this tutorial, we will explore how to interact and explore the Hugging Face Hub with the "),Ve=r("code"),as=s("huggingface_hub"),ss=s(" library to help find available models and datasets quickly."),Jt=h(),I=r("h2"),z=r("a"),et=r("span"),u(V.$$.fragment),ls=h(),tt=r("span"),is=s("The Basics"),Ut=h(),ee=r("p"),at=r("code"),rs=s("huggingface_hub"),os=s(" is a Python library that allows anyone to freely extract useful information from the Hub, as well as downloading and publishing models. You can install it with:"),Wt=h(),u(te.$$.fragment),Yt=h(),K=r("p"),ns=s("It comes packaged with an interface that can interact with the Hub in the "),ye=r("a"),cs=s("HfApi"),hs=s(" class:"),Qt=h(),u(ae.$$.fragment),Xt=h(),xe=r("p"),fs=s("This class lets you perform a variety of operations that interact with the raw Hub API. We\u2019ll be focusing on two specific functions:"),Zt=h(),B=r("ul"),st=r("li"),we=r("a"),ps=s("list_models()"),us=h(),lt=r("li"),$e=r("a"),gs=s("list_datasets()"),Vt=h(),Ee=r("p"),ds=s("If you look at what can be passed into each function, you will find the parameter list looks something like:"),ea=h(),x=r("ul"),it=r("li"),rt=r("code"),ms=s("filter"),_s=h(),ot=r("li"),nt=r("code"),bs=s("author"),vs=h(),ct=r("li"),ht=r("code"),ys=s("search"),xs=h(),ft=r("li"),ws=s("\u2026"),ta=h(),w=r("p"),$s=s("Two of these parameters are intuitive ("),pt=r("code"),Es=s("author"),js=s(" and "),ut=r("code"),ks=s("search"),As=s("), but what about that "),gt=r("code"),Ts=s("filter"),Ps=s("? \u{1F914} Let\u2019s dive into a few helpers quickly and revisit that question."),aa=h(),H=r("h2"),R=r("a"),dt=r("span"),u(se.$$.fragment),Ss=h(),mt=r("span"),Ds=s("Search Parameters"),sa=h(),v=r("p"),Fs=s("The "),_t=r("code"),Ms=s("huggingface_hub"),Cs=s(" provides a user-friendly interface to know what exactly can be passed into this "),bt=r("code"),Is=s("filter"),Hs=s(" parameter through the "),je=r("a"),Os=s("ModelSearchArguments"),qs=s(" and "),ke=r("a"),Ns=s("DatasetSearchArguments"),Ls=s(" classes:"),la=h(),u(le.$$.fragment),ia=h(),E=r("p"),zs=s("These are nested namespace objects that have "),vt=r("strong"),Ks=s("every single option"),Bs=s(" available on the Hub and that will return what should be passed to "),yt=r("code"),Rs=s("filter"),Gs=s(". The best of all is: it has tab completion \u{1F38A} ."),ra=h(),O=r("h2"),G=r("a"),xt=r("span"),u(ie.$$.fragment),Js=h(),wt=r("span"),Us=s("Searching for a Model"),oa=h(),Ae=r("p"),Ws=s("Let\u2019s pose a problem that would be complicated to solve without access to this information:"),na=h(),Te=r("blockquote"),re=r("p"),Ys=s("I want to search the Hub for all PyTorch models trained on the "),$t=r("code"),Qs=s("glue"),Xs=s(" dataset that can do Text Classification."),ca=h(),J=r("p"),Zs=s("If you check what is available in "),Et=r("code"),Vs=s("model_args"),el=s(" by checking it\u2019s output, you will find:"),ha=h(),u(oe.$$.fragment),fa=h(),j=r("p"),tl=s("It has a variety of attributes or keys available to you. This is because it is both an object and a dictionary, so you can either do "),jt=r("code"),al=s('model_args["author"]'),sl=s(" or "),kt=r("code"),ll=s("model_args.author"),il=s(". For this tutorial, let\u2019s follow the latter format."),pa=h(),U=r("p"),rl=s("The first criteria is getting all PyTorch models. This would be found under the "),At=r("code"),ol=s("library"),nl=s(" attribute, so let\u2019s see if it is there:"),ua=h(),u(ne.$$.fragment),ga=h(),k=r("p"),cl=s("It is! The "),Tt=r("code"),hl=s("PyTorch"),fl=s(" name is there, so you\u2019ll need to use "),Pt=r("code"),pl=s("model_args.library.PyTorch"),ul=s(":"),da=h(),u(ce.$$.fragment),ma=h(),A=r("p"),gl=s("Below is an animation repeating the process for finding both the "),St=r("code"),dl=s("Text Classification"),ml=s(" and "),Dt=r("code"),_l=s("glue"),bl=s(" requirements:"),_a=h(),Pe=r("p"),Se=r("img"),ba=h(),De=r("p"),Fe=r("img"),va=h(),T=r("p"),vl=s("Now that all the pieces are there, the last step is to combine them all for something the API can use through the "),Me=r("a"),yl=s("ModelFilter"),xl=s(" and "),Ce=r("a"),wl=s("DatasetFilter"),$l=s(" classes. The classes transform the outputs of the previous step into something the API can use conveniently:"),ya=h(),u(he.$$.fragment),xa=h(),W=r("p"),El=s("As you can see, it found the models that fit all the criteria. You can even take it further by passing in an array for each of the parameters from before. For example, let\u2019s take a look for the same configuration, but also include "),Ft=r("code"),jl=s("TensorFlow"),kl=s(" in the filter:"),wa=h(),u(fe.$$.fragment),$a=h(),q=r("h2"),Y=r("a"),Mt=r("span"),u(pe.$$.fragment),Al=h(),Ct=r("span"),Tl=s("Searching for a Dataset"),Ea=h(),Ie=r("p"),Pl=s("Similarly to finding a model, you can find a dataset easily by following the same steps."),ja=h(),He=r("p"),Sl=s("The new scenario will be:"),ka=h(),Oe=r("blockquote"),ue=r("p"),Dl=s("I want to search the Hub for all datasets that can be used for "),It=r("code"),Fl=s("text_classification"),Ml=s(" and are in English."),Aa=h(),P=r("p"),Cl=s("First, you should look at what is available in the "),qe=r("a"),Il=s("DatasetSearchArguments"),Hl=s(", similar to the "),Ne=r("a"),Ol=s("ModelSearchArguments"),ql=s(":"),Ta=h(),u(ge.$$.fragment),Pa=h(),$=r("p"),Ht=r("code"),Nl=s("text_classification"),Ll=s(" is a "),Ot=r("em"),zl=s("task"),Kl=s(", so first you should check "),qt=r("code"),Bl=s("task_categories"),Rl=s(":"),Sa=h(),u(de.$$.fragment),Da=h(),S=r("p"),Gl=s("There you will find "),Nt=r("code"),Jl=s("text_classification"),Ul=s(", so you should use "),Lt=r("code"),Wl=s("dataset_args.task_categories.text_classification"),Yl=s("."),Fa=h(),D=r("p"),Ql=s("Next we need to find the proper language. There is a "),zt=r("code"),Xl=s("languages"),Zl=s(" property we can check. These are two-letter language codes, so you should check if it has "),Kt=r("code"),Vl=s("en"),ei=s(":"),Ma=h(),u(me.$$.fragment),Ca=h(),Le=r("p"),ti=s("Now that the pieces are found, you can write a filter:"),Ia=h(),u(_e.$$.fragment),Ha=h(),ze=r("p"),ai=s("And search the API!"),Oa=h(),u(be.$$.fragment),qa=h(),Ke=r("p"),si=s("With these two functionalities combined, you can search for all available parameters and tags within the Hub to search for with ease for both Datasets and Models!"),this.h()},l(e){const i=Sr('[data-svelte="svelte-1phssyn"]',document.head);M=o(i,"META",{name:!0,content:!0}),i.forEach(t),Rt=f(e),C=o(e,"H1",{class:!0});var La=n(C);N=o(La,"A",{id:!0,class:!0,href:!0});var ni=n(N);Xe=o(ni,"SPAN",{});var ci=n(Xe);g(Z.$$.fragment,ci),ci.forEach(t),ni.forEach(t),Va=f(La),Ze=o(La,"SPAN",{});var hi=n(Ze);es=l(hi,"Searching the Hub Efficiently with Python"),hi.forEach(t),La.forEach(t),Gt=f(e),L=o(e,"P",{});var za=n(L);ts=l(za,"In this tutorial, we will explore how to interact and explore the Hugging Face Hub with the "),Ve=o(za,"CODE",{});var fi=n(Ve);as=l(fi,"huggingface_hub"),fi.forEach(t),ss=l(za," library to help find available models and datasets quickly."),za.forEach(t),Jt=f(e),I=o(e,"H2",{class:!0});var Ka=n(I);z=o(Ka,"A",{id:!0,class:!0,href:!0});var pi=n(z);et=o(pi,"SPAN",{});var ui=n(et);g(V.$$.fragment,ui),ui.forEach(t),pi.forEach(t),ls=f(Ka),tt=o(Ka,"SPAN",{});var gi=n(tt);is=l(gi,"The Basics"),gi.forEach(t),Ka.forEach(t),Ut=f(e),ee=o(e,"P",{});var li=n(ee);at=o(li,"CODE",{});var di=n(at);rs=l(di,"huggingface_hub"),di.forEach(t),os=l(li," is a Python library that allows anyone to freely extract useful information from the Hub, as well as downloading and publishing models. You can install it with:"),li.forEach(t),Wt=f(e),g(te.$$.fragment,e),Yt=f(e),K=o(e,"P",{});var Ba=n(K);ns=l(Ba,"It comes packaged with an interface that can interact with the Hub in the "),ye=o(Ba,"A",{href:!0});var mi=n(ye);cs=l(mi,"HfApi"),mi.forEach(t),hs=l(Ba," class:"),Ba.forEach(t),Qt=f(e),g(ae.$$.fragment,e),Xt=f(e),xe=o(e,"P",{});var _i=n(xe);fs=l(_i,"This class lets you perform a variety of operations that interact with the raw Hub API. We\u2019ll be focusing on two specific functions:"),_i.forEach(t),Zt=f(e),B=o(e,"UL",{});var Ra=n(B);st=o(Ra,"LI",{});var bi=n(st);we=o(bi,"A",{href:!0});var vi=n(we);ps=l(vi,"list_models()"),vi.forEach(t),bi.forEach(t),us=f(Ra),lt=o(Ra,"LI",{});var yi=n(lt);$e=o(yi,"A",{href:!0});var xi=n($e);gs=l(xi,"list_datasets()"),xi.forEach(t),yi.forEach(t),Ra.forEach(t),Vt=f(e),Ee=o(e,"P",{});var wi=n(Ee);ds=l(wi,"If you look at what can be passed into each function, you will find the parameter list looks something like:"),wi.forEach(t),ea=f(e),x=o(e,"UL",{});var Q=n(x);it=o(Q,"LI",{});var $i=n(it);rt=o($i,"CODE",{});var Ei=n(rt);ms=l(Ei,"filter"),Ei.forEach(t),$i.forEach(t),_s=f(Q),ot=o(Q,"LI",{});var ji=n(ot);nt=o(ji,"CODE",{});var ki=n(nt);bs=l(ki,"author"),ki.forEach(t),ji.forEach(t),vs=f(Q),ct=o(Q,"LI",{});var Ai=n(ct);ht=o(Ai,"CODE",{});var Ti=n(ht);ys=l(Ti,"search"),Ti.forEach(t),Ai.forEach(t),xs=f(Q),ft=o(Q,"LI",{});var Pi=n(ft);ws=l(Pi,"\u2026"),Pi.forEach(t),Q.forEach(t),ta=f(e),w=o(e,"P",{});var X=n(w);$s=l(X,"Two of these parameters are intuitive ("),pt=o(X,"CODE",{});var Si=n(pt);Es=l(Si,"author"),Si.forEach(t),js=l(X," and "),ut=o(X,"CODE",{});var Di=n(ut);ks=l(Di,"search"),Di.forEach(t),As=l(X,"), but what about that "),gt=o(X,"CODE",{});var Fi=n(gt);Ts=l(Fi,"filter"),Fi.forEach(t),Ps=l(X,"? \u{1F914} Let\u2019s dive into a few helpers quickly and revisit that question."),X.forEach(t),aa=f(e),H=o(e,"H2",{class:!0});var Ga=n(H);R=o(Ga,"A",{id:!0,class:!0,href:!0});var Mi=n(R);dt=o(Mi,"SPAN",{});var Ci=n(dt);g(se.$$.fragment,Ci),Ci.forEach(t),Mi.forEach(t),Ss=f(Ga),mt=o(Ga,"SPAN",{});var Ii=n(mt);Ds=l(Ii,"Search Parameters"),Ii.forEach(t),Ga.forEach(t),sa=f(e),v=o(e,"P",{});var F=n(v);Fs=l(F,"The "),_t=o(F,"CODE",{});var Hi=n(_t);Ms=l(Hi,"huggingface_hub"),Hi.forEach(t),Cs=l(F," provides a user-friendly interface to know what exactly can be passed into this "),bt=o(F,"CODE",{});var Oi=n(bt);Is=l(Oi,"filter"),Oi.forEach(t),Hs=l(F," parameter through the "),je=o(F,"A",{href:!0});var qi=n(je);Os=l(qi,"ModelSearchArguments"),qi.forEach(t),qs=l(F," and "),ke=o(F,"A",{href:!0});var Ni=n(ke);Ns=l(Ni,"DatasetSearchArguments"),Ni.forEach(t),Ls=l(F," classes:"),F.forEach(t),la=f(e),g(le.$$.fragment,e),ia=f(e),E=o(e,"P",{});var Be=n(E);zs=l(Be,"These are nested namespace objects that have "),vt=o(Be,"STRONG",{});var Li=n(vt);Ks=l(Li,"every single option"),Li.forEach(t),Bs=l(Be," available on the Hub and that will return what should be passed to "),yt=o(Be,"CODE",{});var zi=n(yt);Rs=l(zi,"filter"),zi.forEach(t),Gs=l(Be,". The best of all is: it has tab completion \u{1F38A} ."),Be.forEach(t),ra=f(e),O=o(e,"H2",{class:!0});var Ja=n(O);G=o(Ja,"A",{id:!0,class:!0,href:!0});var Ki=n(G);xt=o(Ki,"SPAN",{});var Bi=n(xt);g(ie.$$.fragment,Bi),Bi.forEach(t),Ki.forEach(t),Js=f(Ja),wt=o(Ja,"SPAN",{});var Ri=n(wt);Us=l(Ri,"Searching for a Model"),Ri.forEach(t),Ja.forEach(t),oa=f(e),Ae=o(e,"P",{});var Gi=n(Ae);Ws=l(Gi,"Let\u2019s pose a problem that would be complicated to solve without access to this information:"),Gi.forEach(t),na=f(e),Te=o(e,"BLOCKQUOTE",{});var Ji=n(Te);re=o(Ji,"P",{});var Ua=n(re);Ys=l(Ua,"I want to search the Hub for all PyTorch models trained on the "),$t=o(Ua,"CODE",{});var Ui=n($t);Qs=l(Ui,"glue"),Ui.forEach(t),Xs=l(Ua," dataset that can do Text Classification."),Ua.forEach(t),Ji.forEach(t),ca=f(e),J=o(e,"P",{});var Wa=n(J);Zs=l(Wa,"If you check what is available in "),Et=o(Wa,"CODE",{});var Wi=n(Et);Vs=l(Wi,"model_args"),Wi.forEach(t),el=l(Wa," by checking it\u2019s output, you will find:"),Wa.forEach(t),ha=f(e),g(oe.$$.fragment,e),fa=f(e),j=o(e,"P",{});var Re=n(j);tl=l(Re,"It has a variety of attributes or keys available to you. This is because it is both an object and a dictionary, so you can either do "),jt=o(Re,"CODE",{});var Yi=n(jt);al=l(Yi,'model_args["author"]'),Yi.forEach(t),sl=l(Re," or "),kt=o(Re,"CODE",{});var Qi=n(kt);ll=l(Qi,"model_args.author"),Qi.forEach(t),il=l(Re,". For this tutorial, let\u2019s follow the latter format."),Re.forEach(t),pa=f(e),U=o(e,"P",{});var Ya=n(U);rl=l(Ya,"The first criteria is getting all PyTorch models. This would be found under the "),At=o(Ya,"CODE",{});var Xi=n(At);ol=l(Xi,"library"),Xi.forEach(t),nl=l(Ya," attribute, so let\u2019s see if it is there:"),Ya.forEach(t),ua=f(e),g(ne.$$.fragment,e),ga=f(e),k=o(e,"P",{});var Ge=n(k);cl=l(Ge,"It is! The "),Tt=o(Ge,"CODE",{});var Zi=n(Tt);hl=l(Zi,"PyTorch"),Zi.forEach(t),fl=l(Ge," name is there, so you\u2019ll need to use "),Pt=o(Ge,"CODE",{});var Vi=n(Pt);pl=l(Vi,"model_args.library.PyTorch"),Vi.forEach(t),ul=l(Ge,":"),Ge.forEach(t),da=f(e),g(ce.$$.fragment,e),ma=f(e),A=o(e,"P",{});var Je=n(A);gl=l(Je,"Below is an animation repeating the process for finding both the "),St=o(Je,"CODE",{});var er=n(St);dl=l(er,"Text Classification"),er.forEach(t),ml=l(Je," and "),Dt=o(Je,"CODE",{});var tr=n(Dt);_l=l(tr,"glue"),tr.forEach(t),bl=l(Je," requirements:"),Je.forEach(t),_a=f(e),Pe=o(e,"P",{});var ar=n(Pe);Se=o(ar,"IMG",{src:!0,alt:!0}),ar.forEach(t),ba=f(e),De=o(e,"P",{});var sr=n(De);Fe=o(sr,"IMG",{src:!0,alt:!0}),sr.forEach(t),va=f(e),T=o(e,"P",{});var Ue=n(T);vl=l(Ue,"Now that all the pieces are there, the last step is to combine them all for something the API can use through the "),Me=o(Ue,"A",{href:!0});var lr=n(Me);yl=l(lr,"ModelFilter"),lr.forEach(t),xl=l(Ue," and "),Ce=o(Ue,"A",{href:!0});var ir=n(Ce);wl=l(ir,"DatasetFilter"),ir.forEach(t),$l=l(Ue," classes. The classes transform the outputs of the previous step into something the API can use conveniently:"),Ue.forEach(t),ya=f(e),g(he.$$.fragment,e),xa=f(e),W=o(e,"P",{});var Qa=n(W);El=l(Qa,"As you can see, it found the models that fit all the criteria. You can even take it further by passing in an array for each of the parameters from before. For example, let\u2019s take a look for the same configuration, but also include "),Ft=o(Qa,"CODE",{});var rr=n(Ft);jl=l(rr,"TensorFlow"),rr.forEach(t),kl=l(Qa," in the filter:"),Qa.forEach(t),wa=f(e),g(fe.$$.fragment,e),$a=f(e),q=o(e,"H2",{class:!0});var Xa=n(q);Y=o(Xa,"A",{id:!0,class:!0,href:!0});var or=n(Y);Mt=o(or,"SPAN",{});var nr=n(Mt);g(pe.$$.fragment,nr),nr.forEach(t),or.forEach(t),Al=f(Xa),Ct=o(Xa,"SPAN",{});var cr=n(Ct);Tl=l(cr,"Searching for a Dataset"),cr.forEach(t),Xa.forEach(t),Ea=f(e),Ie=o(e,"P",{});var hr=n(Ie);Pl=l(hr,"Similarly to finding a model, you can find a dataset easily by following the same steps."),hr.forEach(t),ja=f(e),He=o(e,"P",{});var fr=n(He);Sl=l(fr,"The new scenario will be:"),fr.forEach(t),ka=f(e),Oe=o(e,"BLOCKQUOTE",{});var pr=n(Oe);ue=o(pr,"P",{});var Za=n(ue);Dl=l(Za,"I want to search the Hub for all datasets that can be used for "),It=o(Za,"CODE",{});var ur=n(It);Fl=l(ur,"text_classification"),ur.forEach(t),Ml=l(Za," and are in English."),Za.forEach(t),pr.forEach(t),Aa=f(e),P=o(e,"P",{});var We=n(P);Cl=l(We,"First, you should look at what is available in the "),qe=o(We,"A",{href:!0});var gr=n(qe);Il=l(gr,"DatasetSearchArguments"),gr.forEach(t),Hl=l(We,", similar to the "),Ne=o(We,"A",{href:!0});var dr=n(Ne);Ol=l(dr,"ModelSearchArguments"),dr.forEach(t),ql=l(We,":"),We.forEach(t),Ta=f(e),g(ge.$$.fragment,e),Pa=f(e),$=o(e,"P",{});var ve=n($);Ht=o(ve,"CODE",{});var mr=n(Ht);Nl=l(mr,"text_classification"),mr.forEach(t),Ll=l(ve," is a "),Ot=o(ve,"EM",{});var _r=n(Ot);zl=l(_r,"task"),_r.forEach(t),Kl=l(ve,", so first you should check "),qt=o(ve,"CODE",{});var br=n(qt);Bl=l(br,"task_categories"),br.forEach(t),Rl=l(ve,":"),ve.forEach(t),Sa=f(e),g(de.$$.fragment,e),Da=f(e),S=o(e,"P",{});var Ye=n(S);Gl=l(Ye,"There you will find "),Nt=o(Ye,"CODE",{});var vr=n(Nt);Jl=l(vr,"text_classification"),vr.forEach(t),Ul=l(Ye,", so you should use "),Lt=o(Ye,"CODE",{});var yr=n(Lt);Wl=l(yr,"dataset_args.task_categories.text_classification"),yr.forEach(t),Yl=l(Ye,"."),Ye.forEach(t),Fa=f(e),D=o(e,"P",{});var Qe=n(D);Ql=l(Qe,"Next we need to find the proper language. There is a "),zt=o(Qe,"CODE",{});var xr=n(zt);Xl=l(xr,"languages"),xr.forEach(t),Zl=l(Qe," property we can check. These are two-letter language codes, so you should check if it has "),Kt=o(Qe,"CODE",{});var wr=n(Kt);Vl=l(wr,"en"),wr.forEach(t),ei=l(Qe,":"),Qe.forEach(t),Ma=f(e),g(me.$$.fragment,e),Ca=f(e),Le=o(e,"P",{});var $r=n(Le);ti=l($r,"Now that the pieces are found, you can write a filter:"),$r.forEach(t),Ia=f(e),g(_e.$$.fragment,e),Ha=f(e),ze=o(e,"P",{});var Er=n(ze);ai=l(Er,"And search the API!"),Er.forEach(t),Oa=f(e),g(be.$$.fragment,e),qa=f(e),Ke=o(e,"P",{});var jr=n(Ke);si=l(jr,"With these two functionalities combined, you can search for all available parameters and tags within the Hub to search for with ease for both Datasets and Models!"),jr.forEach(t),this.h()},h(){p(M,"name","hf:doc:metadata"),p(M,"content",JSON.stringify(Cr)),p(N,"id","searching-the-hub-efficiently-with-python"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#searching-the-hub-efficiently-with-python"),p(C,"class","relative group"),p(z,"id","the-basics"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#the-basics"),p(I,"class","relative group"),p(ye,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi"),p(we,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.list_models"),p($e,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.list_datasets"),p(R,"id","search-parameters"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#search-parameters"),p(H,"class","relative group"),p(je,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.ModelSearchArguments"),p(ke,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.DatasetSearchArguments"),p(G,"id","searching-for-a-model"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#searching-for-a-model"),p(O,"class","relative group"),kr(Se.src,ri="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/search_text_classification.gif")||p(Se,"src",ri),p(Se,"alt","Animation exploring `model_args.pipeline_tag`"),kr(Fe.src,oi="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/search_glue.gif")||p(Fe,"src",oi),p(Fe,"alt","Animation exploring `model_args.dataset`"),p(Me,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.ModelFilter"),p(Ce,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.DatasetFilter"),p(Y,"id","searching-for-a-dataset"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#searching-for-a-dataset"),p(q,"class","relative group"),p(qe,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.DatasetSearchArguments"),p(Ne,"href","/docs/huggingface_hub/v0.10.0.rc0/en/package_reference/hf_api#huggingface_hub.ModelSearchArguments")},m(e,i){a(document.head,M),c(e,Rt,i),c(e,C,i),a(C,N),a(N,Xe),d(Z,Xe,null),a(C,Va),a(C,Ze),a(Ze,es),c(e,Gt,i),c(e,L,i),a(L,ts),a(L,Ve),a(Ve,as),a(L,ss),c(e,Jt,i),c(e,I,i),a(I,z),a(z,et),d(V,et,null),a(I,ls),a(I,tt),a(tt,is),c(e,Ut,i),c(e,ee,i),a(ee,at),a(at,rs),a(ee,os),c(e,Wt,i),d(te,e,i),c(e,Yt,i),c(e,K,i),a(K,ns),a(K,ye),a(ye,cs),a(K,hs),c(e,Qt,i),d(ae,e,i),c(e,Xt,i),c(e,xe,i),a(xe,fs),c(e,Zt,i),c(e,B,i),a(B,st),a(st,we),a(we,ps),a(B,us),a(B,lt),a(lt,$e),a($e,gs),c(e,Vt,i),c(e,Ee,i),a(Ee,ds),c(e,ea,i),c(e,x,i),a(x,it),a(it,rt),a(rt,ms),a(x,_s),a(x,ot),a(ot,nt),a(nt,bs),a(x,vs),a(x,ct),a(ct,ht),a(ht,ys),a(x,xs),a(x,ft),a(ft,ws),c(e,ta,i),c(e,w,i),a(w,$s),a(w,pt),a(pt,Es),a(w,js),a(w,ut),a(ut,ks),a(w,As),a(w,gt),a(gt,Ts),a(w,Ps),c(e,aa,i),c(e,H,i),a(H,R),a(R,dt),d(se,dt,null),a(H,Ss),a(H,mt),a(mt,Ds),c(e,sa,i),c(e,v,i),a(v,Fs),a(v,_t),a(_t,Ms),a(v,Cs),a(v,bt),a(bt,Is),a(v,Hs),a(v,je),a(je,Os),a(v,qs),a(v,ke),a(ke,Ns),a(v,Ls),c(e,la,i),d(le,e,i),c(e,ia,i),c(e,E,i),a(E,zs),a(E,vt),a(vt,Ks),a(E,Bs),a(E,yt),a(yt,Rs),a(E,Gs),c(e,ra,i),c(e,O,i),a(O,G),a(G,xt),d(ie,xt,null),a(O,Js),a(O,wt),a(wt,Us),c(e,oa,i),c(e,Ae,i),a(Ae,Ws),c(e,na,i),c(e,Te,i),a(Te,re),a(re,Ys),a(re,$t),a($t,Qs),a(re,Xs),c(e,ca,i),c(e,J,i),a(J,Zs),a(J,Et),a(Et,Vs),a(J,el),c(e,ha,i),d(oe,e,i),c(e,fa,i),c(e,j,i),a(j,tl),a(j,jt),a(jt,al),a(j,sl),a(j,kt),a(kt,ll),a(j,il),c(e,pa,i),c(e,U,i),a(U,rl),a(U,At),a(At,ol),a(U,nl),c(e,ua,i),d(ne,e,i),c(e,ga,i),c(e,k,i),a(k,cl),a(k,Tt),a(Tt,hl),a(k,fl),a(k,Pt),a(Pt,pl),a(k,ul),c(e,da,i),d(ce,e,i),c(e,ma,i),c(e,A,i),a(A,gl),a(A,St),a(St,dl),a(A,ml),a(A,Dt),a(Dt,_l),a(A,bl),c(e,_a,i),c(e,Pe,i),a(Pe,Se),c(e,ba,i),c(e,De,i),a(De,Fe),c(e,va,i),c(e,T,i),a(T,vl),a(T,Me),a(Me,yl),a(T,xl),a(T,Ce),a(Ce,wl),a(T,$l),c(e,ya,i),d(he,e,i),c(e,xa,i),c(e,W,i),a(W,El),a(W,Ft),a(Ft,jl),a(W,kl),c(e,wa,i),d(fe,e,i),c(e,$a,i),c(e,q,i),a(q,Y),a(Y,Mt),d(pe,Mt,null),a(q,Al),a(q,Ct),a(Ct,Tl),c(e,Ea,i),c(e,Ie,i),a(Ie,Pl),c(e,ja,i),c(e,He,i),a(He,Sl),c(e,ka,i),c(e,Oe,i),a(Oe,ue),a(ue,Dl),a(ue,It),a(It,Fl),a(ue,Ml),c(e,Aa,i),c(e,P,i),a(P,Cl),a(P,qe),a(qe,Il),a(P,Hl),a(P,Ne),a(Ne,Ol),a(P,ql),c(e,Ta,i),d(ge,e,i),c(e,Pa,i),c(e,$,i),a($,Ht),a(Ht,Nl),a($,Ll),a($,Ot),a(Ot,zl),a($,Kl),a($,qt),a(qt,Bl),a($,Rl),c(e,Sa,i),d(de,e,i),c(e,Da,i),c(e,S,i),a(S,Gl),a(S,Nt),a(Nt,Jl),a(S,Ul),a(S,Lt),a(Lt,Wl),a(S,Yl),c(e,Fa,i),c(e,D,i),a(D,Ql),a(D,zt),a(zt,Xl),a(D,Zl),a(D,Kt),a(Kt,Vl),a(D,ei),c(e,Ma,i),d(me,e,i),c(e,Ca,i),c(e,Le,i),a(Le,ti),c(e,Ia,i),d(_e,e,i),c(e,Ha,i),c(e,ze,i),a(ze,ai),c(e,Oa,i),d(be,e,i),c(e,qa,i),c(e,Ke,i),a(Ke,si),Na=!0},p:Dr,i(e){Na||(m(Z.$$.fragment,e),m(V.$$.fragment,e),m(te.$$.fragment,e),m(ae.$$.fragment,e),m(se.$$.fragment,e),m(le.$$.fragment,e),m(ie.$$.fragment,e),m(oe.$$.fragment,e),m(ne.$$.fragment,e),m(ce.$$.fragment,e),m(he.$$.fragment,e),m(fe.$$.fragment,e),m(pe.$$.fragment,e),m(ge.$$.fragment,e),m(de.$$.fragment,e),m(me.$$.fragment,e),m(_e.$$.fragment,e),m(be.$$.fragment,e),Na=!0)},o(e){_(Z.$$.fragment,e),_(V.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(ce.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(pe.$$.fragment,e),_(ge.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),Na=!1},d(e){t(M),e&&t(Rt),e&&t(C),b(Z),e&&t(Gt),e&&t(L),e&&t(Jt),e&&t(I),b(V),e&&t(Ut),e&&t(ee),e&&t(Wt),b(te,e),e&&t(Yt),e&&t(K),e&&t(Qt),b(ae,e),e&&t(Xt),e&&t(xe),e&&t(Zt),e&&t(B),e&&t(Vt),e&&t(Ee),e&&t(ea),e&&t(x),e&&t(ta),e&&t(w),e&&t(aa),e&&t(H),b(se),e&&t(sa),e&&t(v),e&&t(la),b(le,e),e&&t(ia),e&&t(E),e&&t(ra),e&&t(O),b(ie),e&&t(oa),e&&t(Ae),e&&t(na),e&&t(Te),e&&t(ca),e&&t(J),e&&t(ha),b(oe,e),e&&t(fa),e&&t(j),e&&t(pa),e&&t(U),e&&t(ua),b(ne,e),e&&t(ga),e&&t(k),e&&t(da),b(ce,e),e&&t(ma),e&&t(A),e&&t(_a),e&&t(Pe),e&&t(ba),e&&t(De),e&&t(va),e&&t(T),e&&t(ya),b(he,e),e&&t(xa),e&&t(W),e&&t(wa),b(fe,e),e&&t($a),e&&t(q),b(pe),e&&t(Ea),e&&t(Ie),e&&t(ja),e&&t(He),e&&t(ka),e&&t(Oe),e&&t(Aa),e&&t(P),e&&t(Ta),b(ge,e),e&&t(Pa),e&&t($),e&&t(Sa),b(de,e),e&&t(Da),e&&t(S),e&&t(Fa),e&&t(D),e&&t(Ma),b(me,e),e&&t(Ca),e&&t(Le),e&&t(Ia),b(_e,e),e&&t(Ha),e&&t(ze),e&&t(Oa),b(be,e),e&&t(qa),e&&t(Ke)}}}const Cr={local:"searching-the-hub-efficiently-with-python",sections:[{local:"the-basics",title:"The Basics"},{local:"search-parameters",title:"Search Parameters"},{local:"searching-for-a-model",title:"Searching for a Model"},{local:"searching-for-a-dataset",title:"Searching for a Dataset"}],title:"Searching the Hub Efficiently with Python"};function Ir(ii){return Fr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nr extends Ar{constructor(M){super();Tr(this,M,Ir,Mr,Pr,{})}}export{Nr as default,Cr as metadata};
