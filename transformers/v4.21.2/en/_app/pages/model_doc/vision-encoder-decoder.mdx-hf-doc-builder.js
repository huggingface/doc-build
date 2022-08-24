import{S as Hm,i as Um,s as Zm,e as a,k as l,w as b,t as n,M as Ym,c as s,d as t,m as p,a as d,x as w,h as r,b as c,G as e,g,y as E,q as T,o as y,B as k,v as Jm,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nl}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Km(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model from a ViT & bert-base-uncased style configurations
model = VisionEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained("my-model")
model = VisionEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model from a ViT &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function Qm(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function Xm(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests
from PIL import Image
import torch

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

pixel_values = processor(image, return_tensors="pt").pixel_values
text = "hello world"
labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values=pixel_values, labels=labels)
loss = outputs.loss

# inference (generation)
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function eh(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import VisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = VisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function oh(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function th(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
from PIL import Image
import requests

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
decoder_tokenizer = AutoTokenizer.from_pretrained("gpt2")

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
img = Image.open(requests.get(url, stream=True).raw)

# forward
pixel_values = feature_extractor(images=img, return_tensors="tf").pixel_values  # Batch size 1
decoder_input_ids = decoder_tokenizer("Linda Davis", return_tensors="tf").input_ids  # Batch size 1
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

# training
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("vit-gpt2")
model = TFVisionEncoderDecoderModel.from_pretrained("vit-gpt2")

# generation
generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=img, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = decoder_tokenizer(<span class="hljs-string">&quot;Linda Davis&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function nh(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TFVisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = TFVisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function rh(F){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=d(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){g(i,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(i){i&&t(h)}}}function ah(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")

# load output tokenizer
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

# initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

pixel_values = feature_extractor(images=image, return_tensors="np").pixel_values

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

# generation
sequences = model.generate(pixel_values, num_beams=4, max_length=12).sequences

captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){h=a("p"),x=n("Examples:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Examples:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function sh(F){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel

# initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)
# saving model after fine-tuning
model.save_pretrained("./vit-gpt2")
# load fine-tuned model
model = FlaxVisionEncoderDecoderModel.from_pretrained("./vit-gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(f.$$.fragment)},l(i){h=s(i,"P",{});var u=d(h);x=r(u,"Example:"),u.forEach(t),_=p(i),w(f.$$.fragment,i)},m(i,u){g(i,h,u),e(h,x),g(i,_,u),E(f,i,u),v=!0},p:mt,i(i){v||(T(f.$$.fragment,i),v=!0)},o(i){y(f.$$.fragment,i),v=!1},d(i){i&&t(h),i&&t(_),k(f,i)}}}function dh(F){let h,x,_,f,v,i,u,I,qa,yr,ne,ye,fn,to,Fa,gn,za,kr,$,Pa,ht,Ca,Aa,un,Sa,Ia,ft,La,Na,gt,Oa,Ra,ut,Ba,Ga,_t,Wa,Ha,_n,Ua,Za,vt,Ya,Ja,bt,Ka,Qa,wt,Xa,es,Et,os,ts,xr,ke,ns,no,rs,as,$r,xe,ss,Tt,ds,is,jr,J,cs,yt,ls,ps,kt,ms,hs,Vr,re,$e,vn,ro,fs,ao,gs,bn,us,_s,Mr,Z,xt,vs,bs,$t,ws,Es,wn,Ts,ys,Dr,so,qr,ae,je,En,io,ks,co,xs,Tn,$s,js,Fr,V,jt,Vs,Ms,yn,Ds,qs,Vt,Fs,zs,kn,Ps,Cs,xn,As,Ss,$n,Is,Ls,Mt,Ns,Os,Ve,Rs,jn,Bs,Gs,Vn,Ws,Hs,Dt,Us,Zs,zr,lo,Pr,se,Me,Mn,po,Ys,mo,Js,Dn,Ks,Qs,Cr,L,Xs,qn,ed,od,qt,td,nd,Fn,rd,ad,Ar,De,sd,zn,dd,id,Sr,ho,Ir,de,qe,Pn,fo,cd,go,ld,Cn,pd,md,Lr,ie,An,hd,fd,Sn,gd,ud,Nr,uo,Or,ce,Fe,In,_o,_d,Ln,vd,Rr,N,bd,Nn,wd,Ed,On,Td,yd,Rn,kd,xd,Br,vo,Gr,K,$d,bo,jd,Vd,wo,Md,Dd,Wr,le,ze,Bn,Eo,qd,Gn,Fd,Hr,S,To,zd,Pe,Ft,Pd,Cd,zt,Ad,Sd,Id,pe,Ld,Pt,Nd,Od,Ct,Rd,Bd,Gd,Ce,Wd,Ae,yo,Hd,ko,Ud,At,Zd,Yd,Jd,Se,xo,Kd,me,Qd,Wn,Xd,ei,Hn,oi,ti,Ur,he,Ie,Un,$o,ni,Zn,ri,Zr,M,jo,ai,fe,si,St,di,ii,It,ci,li,pi,Vo,mi,Mo,hi,fi,gi,Do,ui,qo,_i,vi,bi,Yn,wi,Ei,Fo,Ti,Lt,yi,ki,xi,zo,$i,Po,ji,Vi,Mi,Q,Nt,Di,qi,Jn,Fi,zi,Kn,Pi,Ci,Ai,O,Co,Si,ge,Ii,Ot,Li,Ni,Qn,Oi,Ri,Bi,Le,Gi,Ne,Wi,R,Ao,Hi,Xn,Ui,Zi,ue,Yi,er,Ji,Ki,or,Qi,Xi,ec,Oe,Yr,_e,Re,tr,So,oc,nr,tc,Jr,D,Io,nc,ve,rc,Rt,ac,sc,Bt,dc,ic,cc,Lo,lc,No,pc,mc,hc,Oo,fc,Ro,gc,uc,_c,rr,vc,bc,Bo,wc,Gt,Ec,Tc,yc,Go,kc,Wo,xc,$c,jc,X,Wt,Vc,Mc,Ht,Dc,qc,Ut,Fc,zc,Pc,B,Ho,Cc,be,Ac,Zt,Sc,Ic,ar,Lc,Nc,Oc,Be,Rc,Ge,Bc,ee,Uo,Gc,sr,Wc,Hc,We,Kr,we,He,dr,Zo,Uc,ir,Zc,Qr,q,Yo,Yc,Ee,Jc,Yt,Kc,Qc,Jt,Xc,el,ol,Jo,tl,Ko,nl,rl,al,Qo,sl,Xo,dl,il,cl,cr,ll,pl,et,ml,Kt,hl,fl,gl,ot,ul,tt,_l,vl,bl,oe,Qt,wl,El,lr,Tl,yl,pr,kl,xl,$l,G,nt,jl,Te,Vl,Xt,Ml,Dl,mr,ql,Fl,zl,Ue,Pl,Ze,Cl,te,rt,Al,hr,Sl,Il,Ye,Xr;return i=new Y({}),to=new Y({}),ro=new Y({}),so=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = VisionEncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)`}}),io=new Y({}),lo=new U({props:{code:`from transformers import VisionEncoderDecoderModel

model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "microsoft/swin-base-patch4-window7-224-in22k", "bert-base-uncased"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/swin-base-patch4-window7-224-in22k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)`}}),po=new Y({}),ho=new U({props:{code:`import requests
from PIL import Image

from transformers import GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

# load a fine-tuned image captioning model and corresponding tokenizer and feature extractor
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
tokenizer = GPT2TokenizerFast.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
feature_extractor = ViTFeatureExtractor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

# let's perform inference on an image
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

# autoregressively generate caption (uses greedy decoding by default)
generated_ids = model.generate(pixel_values)
generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
print(generated_text)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast, ViTFeatureExtractor, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned image captioning model and corresponding tokenizer and feature extractor</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s perform inference on an image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># autoregressively generate caption (uses greedy decoding by default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated_text)
a cat laying on a blanket <span class="hljs-built_in">next</span> to a cat laying on a bed`}}),fo=new Y({}),uo=new U({props:{code:`from transformers import VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

_model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")

model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel, TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>_model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;nlpconnect/vit-gpt2-image-captioning&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),_o=new Y({}),vo=new U({props:{code:`from transformers import ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
from datasets import load_dataset

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)

model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]
pixel_values = feature_extractor(image, return_tensors="pt").pixel_values

labels = tokenizer(
    "an image of two cats chilling on a couch",
    return_tensors="pt",
).input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(pixel_values=pixel_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, BertTokenizer, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;an image of two cats chilling on a couch&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(pixel_values=pixel_values, labels=labels).loss`}}),Eo=new Y({}),To=new H({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L27"}}),Ce=new pt({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[Km]},$$scope:{ctx:F}}}),yo=new H({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),xo=new H({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),$o=new Y({}),jo=new H({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L148"}}),Co=new H({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L401",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new Nl({props:{$$slots:{default:[Qm]},$$scope:{ctx:F}}}),Ne=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[Xm]},$$scope:{ctx:F}}}),Ao=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L247"}}),Oe=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[eh]},$$scope:{ctx:F}}}),So=new Y({}),Io=new H({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L176"}}),Ho=new H({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L514",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Be=new Nl({props:{$$slots:{default:[oh]},$$scope:{ctx:F}}}),Ge=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[th]},$$scope:{ctx:F}}}),Uo=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L350"}}),We=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[nh]},$$scope:{ctx:F}}}),Zo=new Y({}),Yo=new H({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L268"}}),nt=new H({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Nl({props:{$$slots:{default:[rh]},$$scope:{ctx:F}}}),Ze=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[ah]},$$scope:{ctx:F}}}),rt=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),Ye=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[sh]},$$scope:{ctx:F}}}),{c(){h=a("meta"),x=l(),_=a("h1"),f=a("a"),v=a("span"),b(i.$$.fragment),u=l(),I=a("span"),qa=n("Vision Encoder Decoder Models"),yr=l(),ne=a("h2"),ye=a("a"),fn=a("span"),b(to.$$.fragment),Fa=l(),gn=a("span"),za=n("Overview"),kr=l(),$=a("p"),Pa=n("The "),ht=a("a"),Ca=n("VisionEncoderDecoderModel"),Aa=n(` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=a("em"),Sa=n("e.g."),Ia=l(),ft=a("a"),La=n("ViT"),Na=n(", "),gt=a("a"),Oa=n("BEiT"),Ra=n(", "),ut=a("a"),Ba=n("DeiT"),Ga=n(", "),_t=a("a"),Wa=n("Swin"),Ha=n(`)
and any pretrained language model as the decoder (`),_n=a("em"),Ua=n("e.g."),Za=l(),vt=a("a"),Ya=n("RoBERTa"),Ja=n(", "),bt=a("a"),Ka=n("GPT2"),Qa=n(", "),wt=a("a"),Xa=n("BERT"),es=n(", "),Et=a("a"),os=n("DistilBERT"),ts=n(")."),xr=l(),ke=a("p"),ns=n(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=a("a"),rs=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),as=n(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),$r=l(),xe=a("p"),ss=n("After such a "),Tt=a("a"),ds=n("VisionEncoderDecoderModel"),is=n(` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),jr=l(),J=a("p"),cs=n(`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=a("a"),ls=n("TrOCR"),ps=n(", which is an instance of "),kt=a("a"),ms=n("VisionEncoderDecoderModel"),hs=n("."),Vr=l(),re=a("h2"),$e=a("a"),vn=a("span"),b(ro.$$.fragment),fs=l(),ao=a("span"),gs=n("Randomly initializing "),bn=a("code"),us=n("VisionEncoderDecoderModel"),_s=n(" from model configurations."),Mr=l(),Z=a("p"),xt=a("a"),vs=n("VisionEncoderDecoderModel"),bs=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=a("a"),ws=n("ViTModel"),Es=n(` configuration for the encoder
and the default `),wn=a("code"),Ts=n("BertForCausalLM"),ys=n(" configuration for the decoder."),Dr=l(),b(so.$$.fragment),qr=l(),ae=a("h2"),je=a("a"),En=a("span"),b(io.$$.fragment),ks=l(),co=a("span"),xs=n("Initialising "),Tn=a("code"),$s=n("VisionEncoderDecoderModel"),js=n(" from a pretrained encoder and a pretrained decoder."),Fr=l(),V=a("p"),jt=a("a"),Vs=n("VisionEncoderDecoderModel"),Ms=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=a("em"),Ds=n("e.g."),qs=l(),Vt=a("a"),Fs=n("Swin"),zs=n(", can serve as the encoder and both pretrained auto-encoding models, "),kn=a("em"),Ps=n("e.g."),Cs=n(" BERT, pretrained causal language models, "),xn=a("em"),As=n("e.g."),Ss=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=a("em"),Is=n("e.g."),Ls=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Mt=a("a"),Ns=n("VisionEncoderDecoderModel"),Os=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Ve=a("a"),Rs=n("the "),jn=a("em"),Bs=n("Warm-starting-encoder-decoder blog post"),Gs=n(`.
To do so, the `),Vn=a("code"),Ws=n("VisionEncoderDecoderModel"),Hs=n(" class provides a "),Dt=a("a"),Us=n("VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),Zs=n(" method."),zr=l(),b(lo.$$.fragment),Pr=l(),se=a("h2"),Me=a("a"),Mn=a("span"),b(po.$$.fragment),Ys=l(),mo=a("span"),Js=n("Loading an existing "),Dn=a("code"),Ks=n("VisionEncoderDecoderModel"),Qs=n(" checkpoint and perform inference."),Cr=l(),L=a("p"),Xs=n("To load fine-tuned checkpoints of the "),qn=a("code"),ed=n("VisionEncoderDecoderModel"),od=n(" class, "),qt=a("a"),td=n("VisionEncoderDecoderModel"),nd=n(" provides the "),Fn=a("code"),rd=n("from_pretrained(...)"),ad=n(" method just like any other model architecture in Transformers."),Ar=l(),De=a("p"),sd=n("To perform inference, one uses the "),zn=a("code"),dd=n("generate"),id=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Sr=l(),b(ho.$$.fragment),Ir=l(),de=a("h2"),qe=a("a"),Pn=a("span"),b(fo.$$.fragment),cd=l(),go=a("span"),ld=n("Loading a PyTorch checkpoint into "),Cn=a("code"),pd=n("TFVisionEncoderDecoderModel"),md=n("."),Lr=l(),ie=a("p"),An=a("code"),hd=n("TFVisionEncoderDecoderModel.from_pretrained()"),fd=n(` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=a("code"),gd=n("from_pt=True"),ud=n(` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Nr=l(),b(uo.$$.fragment),Or=l(),ce=a("h2"),Fe=a("a"),In=a("span"),b(_o.$$.fragment),_d=l(),Ln=a("span"),vd=n("Training"),Rr=l(),N=a("p"),bd=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=a("code"),wd=n("pixel_values"),Ed=n(` (which are the
images) and `),On=a("code"),Td=n("labels"),yd=n(" (which are the "),Rn=a("code"),kd=n("input_ids"),xd=n(" of the encoded target sequence)."),Br=l(),b(vo.$$.fragment),Gr=l(),K=a("p"),$d=n("This model was contributed by "),bo=a("a"),jd=n("nielsr"),Vd=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=a("a"),Md=n("ydshieh"),Dd=n("."),Wr=l(),le=a("h2"),ze=a("a"),Bn=a("span"),b(Eo.$$.fragment),qd=l(),Gn=a("span"),Fd=n("VisionEncoderDecoderConfig"),Hr=l(),S=a("div"),b(To.$$.fragment),zd=l(),Pe=a("p"),Ft=a("a"),Pd=n("VisionEncoderDecoderConfig"),Cd=n(` is the configuration class to store the configuration of a
`),zt=a("a"),Ad=n("VisionEncoderDecoderModel"),Sd=n(`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Id=l(),pe=a("p"),Ld=n("Configuration objects inherit from "),Pt=a("a"),Nd=n("PretrainedConfig"),Od=n(` and can be used to control the model outputs. Read the
documentation from `),Ct=a("a"),Rd=n("PretrainedConfig"),Bd=n(" for more information."),Gd=l(),b(Ce.$$.fragment),Wd=l(),Ae=a("div"),b(yo.$$.fragment),Hd=l(),ko=a("p"),Ud=n("Instantiate a "),At=a("a"),Zd=n("VisionEncoderDecoderConfig"),Yd=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Jd=l(),Se=a("div"),b(xo.$$.fragment),Kd=l(),me=a("p"),Qd=n("Serializes this instance to a Python dictionary. Override the default "),Wn=a("em"),Xd=n("to_dict()"),ei=n(" from "),Hn=a("em"),oi=n("PretrainedConfig"),ti=n("."),Ur=l(),he=a("h2"),Ie=a("a"),Un=a("span"),b($o.$$.fragment),ni=l(),Zn=a("span"),ri=n("VisionEncoderDecoderModel"),Zr=l(),M=a("div"),b(jo.$$.fragment),ai=l(),fe=a("p"),si=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=a("a"),di=n("from_pretrained()"),ii=n(" function and the decoder is loaded via "),It=a("a"),ci=n("from_pretrained()"),li=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pi=l(),Vo=a("p"),mi=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=a("a"),hi=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fi=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gi=l(),Do=a("p"),ui=n("Additionally, in "),qo=a("a"),_i=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),vi=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),bi=l(),Yn=a("p"),wi=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Ei=l(),Fo=a("p"),Ti=n("This model inherits from "),Lt=a("a"),yi=n("PreTrainedModel"),ki=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xi=l(),zo=a("p"),$i=n("This model is also a PyTorch "),Po=a("a"),ji=n("torch.nn.Module"),Vi=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mi=l(),Q=a("p"),Nt=a("a"),Di=n("VisionEncoderDecoderModel"),qi=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=a("em"),Fi=n("~transformers.AutoModel.from_pretrained"),zi=n(` class method for the encoder and
:meth`),Kn=a("em"),Pi=n("~transformers.AutoModelForCausalLM.from_pretrained"),Ci=n(" class method for the decoder."),Ai=l(),O=a("div"),b(Co.$$.fragment),Si=l(),ge=a("p"),Ii=n("The "),Ot=a("a"),Li=n("VisionEncoderDecoderModel"),Ni=n(" forward method, overrides the "),Qn=a("code"),Oi=n("__call__"),Ri=n(" special method."),Bi=l(),b(Le.$$.fragment),Gi=l(),b(Ne.$$.fragment),Wi=l(),R=a("div"),b(Ao.$$.fragment),Hi=l(),Xn=a("p"),Ui=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Zi=l(),ue=a("p"),Yi=n("The model is set in evaluation mode by default using "),er=a("code"),Ji=n("model.eval()"),Ki=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=a("code"),Qi=n("model.train()"),Xi=n("."),ec=l(),b(Oe.$$.fragment),Yr=l(),_e=a("h2"),Re=a("a"),tr=a("span"),b(So.$$.fragment),oc=l(),nr=a("span"),tc=n("TFVisionEncoderDecoderModel"),Jr=l(),D=a("div"),b(Io.$$.fragment),nc=l(),ve=a("p"),rc=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=a("a"),ac=n("from_pretrained()"),sc=n(" function and the decoder is loaded via "),Bt=a("a"),dc=n("from_pretrained()"),ic=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),cc=l(),Lo=a("p"),lc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=a("a"),pc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),mc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),hc=l(),Oo=a("p"),fc=n("Additionally, in "),Ro=a("a"),gc=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),uc=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),_c=l(),rr=a("p"),vc=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),bc=l(),Bo=a("p"),wc=n("This model inherits from "),Gt=a("a"),Ec=n("TFPreTrainedModel"),Tc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc=l(),Go=a("p"),kc=n("This model is also a "),Wo=a("a"),xc=n("tf.keras.Model"),$c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=l(),X=a("p"),Wt=a("a"),Vc=n("TFVisionEncoderDecoderModel"),Mc=n(` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=a("a"),Dc=n("from_pretrained()"),qc=n(` class method for the encoder and
`),Ut=a("a"),Fc=n("from_pretrained()"),zc=n(" class method for the decoder."),Pc=l(),B=a("div"),b(Ho.$$.fragment),Cc=l(),be=a("p"),Ac=n("The "),Zt=a("a"),Sc=n("TFVisionEncoderDecoderModel"),Ic=n(" forward method, overrides the "),ar=a("code"),Lc=n("__call__"),Nc=n(" special method."),Oc=l(),b(Be.$$.fragment),Rc=l(),b(Ge.$$.fragment),Bc=l(),ee=a("div"),b(Uo.$$.fragment),Gc=l(),sr=a("p"),Wc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Hc=l(),b(We.$$.fragment),Kr=l(),we=a("h2"),He=a("a"),dr=a("span"),b(Zo.$$.fragment),Uc=l(),ir=a("span"),Zc=n("FlaxVisionEncoderDecoderModel"),Qr=l(),q=a("div"),b(Yo.$$.fragment),Yc=l(),Ee=a("p"),Jc=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=a("a"),Kc=n("from_pretrained()"),Qc=n(" function and the decoder is loaded via "),Jt=a("a"),Xc=n("from_pretrained()"),el=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),ol=l(),Jo=a("p"),tl=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=a("a"),nl=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),rl=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),al=l(),Qo=a("p"),sl=n("Additionally, in "),Xo=a("a"),dl=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),il=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),cl=l(),cr=a("p"),ll=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),pl=l(),et=a("p"),ml=n("This model inherits from "),Kt=a("a"),hl=n("FlaxPreTrainedModel"),fl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=l(),ot=a("p"),ul=n(`This model is also a Flax Linen
`),tt=a("a"),_l=n("flax.nn.Module"),vl=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bl=l(),oe=a("p"),Qt=a("a"),wl=n("FlaxVisionEncoderDecoderModel"),El=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),lr=a("em"),Tl=n("~transformers.FlaxAutoModel.from_pretrained"),yl=n(` class method
for the encoder and :meth`),pr=a("em"),kl=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),xl=n(" class method for the decoder."),$l=l(),G=a("div"),b(nt.$$.fragment),jl=l(),Te=a("p"),Vl=n("The "),Xt=a("a"),Ml=n("FlaxVisionEncoderDecoderModel"),Dl=n(" forward method, overrides the "),mr=a("code"),ql=n("__call__"),Fl=n(" special method."),zl=l(),b(Ue.$$.fragment),Pl=l(),b(Ze.$$.fragment),Cl=l(),te=a("div"),b(rt.$$.fragment),Al=l(),hr=a("p"),Sl=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Il=l(),b(Ye.$$.fragment),this.h()},l(o){const m=Ym('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),x=p(o),_=s(o,"H1",{class:!0});var at=d(_);f=s(at,"A",{id:!0,class:!0,href:!0});var fr=d(f);v=s(fr,"SPAN",{});var gr=d(v);w(i.$$.fragment,gr),gr.forEach(t),fr.forEach(t),u=p(at),I=s(at,"SPAN",{});var ur=d(I);qa=r(ur,"Vision Encoder Decoder Models"),ur.forEach(t),at.forEach(t),yr=p(o),ne=s(o,"H2",{class:!0});var st=d(ne);ye=s(st,"A",{id:!0,class:!0,href:!0});var _r=d(ye);fn=s(_r,"SPAN",{});var vr=d(fn);w(to.$$.fragment,vr),vr.forEach(t),_r.forEach(t),Fa=p(st),gn=s(st,"SPAN",{});var br=d(gn);za=r(br,"Overview"),br.forEach(t),st.forEach(t),kr=p(o),$=s(o,"P",{});var j=d($);Pa=r(j,"The "),ht=s(j,"A",{href:!0});var wr=d(ht);Ca=r(wr,"VisionEncoderDecoderModel"),wr.forEach(t),Aa=r(j,` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=s(j,"EM",{});var Ol=d(un);Sa=r(Ol,"e.g."),Ol.forEach(t),Ia=p(j),ft=s(j,"A",{href:!0});var Rl=d(ft);La=r(Rl,"ViT"),Rl.forEach(t),Na=r(j,", "),gt=s(j,"A",{href:!0});var Bl=d(gt);Oa=r(Bl,"BEiT"),Bl.forEach(t),Ra=r(j,", "),ut=s(j,"A",{href:!0});var Gl=d(ut);Ba=r(Gl,"DeiT"),Gl.forEach(t),Ga=r(j,", "),_t=s(j,"A",{href:!0});var Wl=d(_t);Wa=r(Wl,"Swin"),Wl.forEach(t),Ha=r(j,`)
and any pretrained language model as the decoder (`),_n=s(j,"EM",{});var Hl=d(_n);Ua=r(Hl,"e.g."),Hl.forEach(t),Za=p(j),vt=s(j,"A",{href:!0});var Ul=d(vt);Ya=r(Ul,"RoBERTa"),Ul.forEach(t),Ja=r(j,", "),bt=s(j,"A",{href:!0});var Zl=d(bt);Ka=r(Zl,"GPT2"),Zl.forEach(t),Qa=r(j,", "),wt=s(j,"A",{href:!0});var Yl=d(wt);Xa=r(Yl,"BERT"),Yl.forEach(t),es=r(j,", "),Et=s(j,"A",{href:!0});var Jl=d(Et);os=r(Jl,"DistilBERT"),Jl.forEach(t),ts=r(j,")."),j.forEach(t),xr=p(o),ke=s(o,"P",{});var ea=d(ke);ns=r(ea,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=s(ea,"A",{href:!0,rel:!0});var Kl=d(no);rs=r(Kl,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Kl.forEach(t),as=r(ea,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),ea.forEach(t),$r=p(o),xe=s(o,"P",{});var oa=d(xe);ss=r(oa,"After such a "),Tt=s(oa,"A",{href:!0});var Ql=d(Tt);ds=r(Ql,"VisionEncoderDecoderModel"),Ql.forEach(t),is=r(oa,` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),oa.forEach(t),jr=p(o),J=s(o,"P",{});var en=d(J);cs=r(en,`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=s(en,"A",{href:!0});var Xl=d(yt);ls=r(Xl,"TrOCR"),Xl.forEach(t),ps=r(en,", which is an instance of "),kt=s(en,"A",{href:!0});var ep=d(kt);ms=r(ep,"VisionEncoderDecoderModel"),ep.forEach(t),hs=r(en,"."),en.forEach(t),Vr=p(o),re=s(o,"H2",{class:!0});var ta=d(re);$e=s(ta,"A",{id:!0,class:!0,href:!0});var op=d($e);vn=s(op,"SPAN",{});var tp=d(vn);w(ro.$$.fragment,tp),tp.forEach(t),op.forEach(t),fs=p(ta),ao=s(ta,"SPAN",{});var na=d(ao);gs=r(na,"Randomly initializing "),bn=s(na,"CODE",{});var np=d(bn);us=r(np,"VisionEncoderDecoderModel"),np.forEach(t),_s=r(na," from model configurations."),na.forEach(t),ta.forEach(t),Mr=p(o),Z=s(o,"P",{});var dt=d(Z);xt=s(dt,"A",{href:!0});var rp=d(xt);vs=r(rp,"VisionEncoderDecoderModel"),rp.forEach(t),bs=r(dt," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=s(dt,"A",{href:!0});var ap=d($t);ws=r(ap,"ViTModel"),ap.forEach(t),Es=r(dt,` configuration for the encoder
and the default `),wn=s(dt,"CODE",{});var sp=d(wn);Ts=r(sp,"BertForCausalLM"),sp.forEach(t),ys=r(dt," configuration for the decoder."),dt.forEach(t),Dr=p(o),w(so.$$.fragment,o),qr=p(o),ae=s(o,"H2",{class:!0});var ra=d(ae);je=s(ra,"A",{id:!0,class:!0,href:!0});var dp=d(je);En=s(dp,"SPAN",{});var ip=d(En);w(io.$$.fragment,ip),ip.forEach(t),dp.forEach(t),ks=p(ra),co=s(ra,"SPAN",{});var aa=d(co);xs=r(aa,"Initialising "),Tn=s(aa,"CODE",{});var cp=d(Tn);$s=r(cp,"VisionEncoderDecoderModel"),cp.forEach(t),js=r(aa," from a pretrained encoder and a pretrained decoder."),aa.forEach(t),ra.forEach(t),Fr=p(o),V=s(o,"P",{});var z=d(V);jt=s(z,"A",{href:!0});var lp=d(jt);Vs=r(lp,"VisionEncoderDecoderModel"),lp.forEach(t),Ms=r(z," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=s(z,"EM",{});var pp=d(yn);Ds=r(pp,"e.g."),pp.forEach(t),qs=p(z),Vt=s(z,"A",{href:!0});var mp=d(Vt);Fs=r(mp,"Swin"),mp.forEach(t),zs=r(z,", can serve as the encoder and both pretrained auto-encoding models, "),kn=s(z,"EM",{});var hp=d(kn);Ps=r(hp,"e.g."),hp.forEach(t),Cs=r(z," BERT, pretrained causal language models, "),xn=s(z,"EM",{});var fp=d(xn);As=r(fp,"e.g."),fp.forEach(t),Ss=r(z," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=s(z,"EM",{});var gp=d($n);Is=r(gp,"e.g."),gp.forEach(t),Ls=r(z,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Mt=s(z,"A",{href:!0});var up=d(Mt);Ns=r(up,"VisionEncoderDecoderModel"),up.forEach(t),Os=r(z," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Ve=s(z,"A",{href:!0,rel:!0});var Ll=d(Ve);Rs=r(Ll,"the "),jn=s(Ll,"EM",{});var _p=d(jn);Bs=r(_p,"Warm-starting-encoder-decoder blog post"),_p.forEach(t),Ll.forEach(t),Gs=r(z,`.
To do so, the `),Vn=s(z,"CODE",{});var vp=d(Vn);Ws=r(vp,"VisionEncoderDecoderModel"),vp.forEach(t),Hs=r(z," class provides a "),Dt=s(z,"A",{href:!0});var bp=d(Dt);Us=r(bp,"VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),bp.forEach(t),Zs=r(z," method."),z.forEach(t),zr=p(o),w(lo.$$.fragment,o),Pr=p(o),se=s(o,"H2",{class:!0});var sa=d(se);Me=s(sa,"A",{id:!0,class:!0,href:!0});var wp=d(Me);Mn=s(wp,"SPAN",{});var Ep=d(Mn);w(po.$$.fragment,Ep),Ep.forEach(t),wp.forEach(t),Ys=p(sa),mo=s(sa,"SPAN",{});var da=d(mo);Js=r(da,"Loading an existing "),Dn=s(da,"CODE",{});var Tp=d(Dn);Ks=r(Tp,"VisionEncoderDecoderModel"),Tp.forEach(t),Qs=r(da," checkpoint and perform inference."),da.forEach(t),sa.forEach(t),Cr=p(o),L=s(o,"P",{});var Je=d(L);Xs=r(Je,"To load fine-tuned checkpoints of the "),qn=s(Je,"CODE",{});var yp=d(qn);ed=r(yp,"VisionEncoderDecoderModel"),yp.forEach(t),od=r(Je," class, "),qt=s(Je,"A",{href:!0});var kp=d(qt);td=r(kp,"VisionEncoderDecoderModel"),kp.forEach(t),nd=r(Je," provides the "),Fn=s(Je,"CODE",{});var xp=d(Fn);rd=r(xp,"from_pretrained(...)"),xp.forEach(t),ad=r(Je," method just like any other model architecture in Transformers."),Je.forEach(t),Ar=p(o),De=s(o,"P",{});var ia=d(De);sd=r(ia,"To perform inference, one uses the "),zn=s(ia,"CODE",{});var $p=d(zn);dd=r($p,"generate"),$p.forEach(t),id=r(ia," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),ia.forEach(t),Sr=p(o),w(ho.$$.fragment,o),Ir=p(o),de=s(o,"H2",{class:!0});var ca=d(de);qe=s(ca,"A",{id:!0,class:!0,href:!0});var jp=d(qe);Pn=s(jp,"SPAN",{});var Vp=d(Pn);w(fo.$$.fragment,Vp),Vp.forEach(t),jp.forEach(t),cd=p(ca),go=s(ca,"SPAN",{});var la=d(go);ld=r(la,"Loading a PyTorch checkpoint into "),Cn=s(la,"CODE",{});var Mp=d(Cn);pd=r(Mp,"TFVisionEncoderDecoderModel"),Mp.forEach(t),md=r(la,"."),la.forEach(t),ca.forEach(t),Lr=p(o),ie=s(o,"P",{});var Er=d(ie);An=s(Er,"CODE",{});var Dp=d(An);hd=r(Dp,"TFVisionEncoderDecoderModel.from_pretrained()"),Dp.forEach(t),fd=r(Er,` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=s(Er,"CODE",{});var qp=d(Sn);gd=r(qp,"from_pt=True"),qp.forEach(t),ud=r(Er,` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Er.forEach(t),Nr=p(o),w(uo.$$.fragment,o),Or=p(o),ce=s(o,"H2",{class:!0});var pa=d(ce);Fe=s(pa,"A",{id:!0,class:!0,href:!0});var Fp=d(Fe);In=s(Fp,"SPAN",{});var zp=d(In);w(_o.$$.fragment,zp),zp.forEach(t),Fp.forEach(t),_d=p(pa),Ln=s(pa,"SPAN",{});var Pp=d(Ln);vd=r(Pp,"Training"),Pp.forEach(t),pa.forEach(t),Rr=p(o),N=s(o,"P",{});var Ke=d(N);bd=r(Ke,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=s(Ke,"CODE",{});var Cp=d(Nn);wd=r(Cp,"pixel_values"),Cp.forEach(t),Ed=r(Ke,` (which are the
images) and `),On=s(Ke,"CODE",{});var Ap=d(On);Td=r(Ap,"labels"),Ap.forEach(t),yd=r(Ke," (which are the "),Rn=s(Ke,"CODE",{});var Sp=d(Rn);kd=r(Sp,"input_ids"),Sp.forEach(t),xd=r(Ke," of the encoded target sequence)."),Ke.forEach(t),Br=p(o),w(vo.$$.fragment,o),Gr=p(o),K=s(o,"P",{});var on=d(K);$d=r(on,"This model was contributed by "),bo=s(on,"A",{href:!0,rel:!0});var Ip=d(bo);jd=r(Ip,"nielsr"),Ip.forEach(t),Vd=r(on,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=s(on,"A",{href:!0,rel:!0});var Lp=d(wo);Md=r(Lp,"ydshieh"),Lp.forEach(t),Dd=r(on,"."),on.forEach(t),Wr=p(o),le=s(o,"H2",{class:!0});var ma=d(le);ze=s(ma,"A",{id:!0,class:!0,href:!0});var Np=d(ze);Bn=s(Np,"SPAN",{});var Op=d(Bn);w(Eo.$$.fragment,Op),Op.forEach(t),Np.forEach(t),qd=p(ma),Gn=s(ma,"SPAN",{});var Rp=d(Gn);Fd=r(Rp,"VisionEncoderDecoderConfig"),Rp.forEach(t),ma.forEach(t),Hr=p(o),S=s(o,"DIV",{class:!0});var W=d(S);w(To.$$.fragment,W),zd=p(W),Pe=s(W,"P",{});var Tr=d(Pe);Ft=s(Tr,"A",{href:!0});var Bp=d(Ft);Pd=r(Bp,"VisionEncoderDecoderConfig"),Bp.forEach(t),Cd=r(Tr,` is the configuration class to store the configuration of a
`),zt=s(Tr,"A",{href:!0});var Gp=d(zt);Ad=r(Gp,"VisionEncoderDecoderModel"),Gp.forEach(t),Sd=r(Tr,`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Tr.forEach(t),Id=p(W),pe=s(W,"P",{});var tn=d(pe);Ld=r(tn,"Configuration objects inherit from "),Pt=s(tn,"A",{href:!0});var Wp=d(Pt);Nd=r(Wp,"PretrainedConfig"),Wp.forEach(t),Od=r(tn,` and can be used to control the model outputs. Read the
documentation from `),Ct=s(tn,"A",{href:!0});var Hp=d(Ct);Rd=r(Hp,"PretrainedConfig"),Hp.forEach(t),Bd=r(tn," for more information."),tn.forEach(t),Gd=p(W),w(Ce.$$.fragment,W),Wd=p(W),Ae=s(W,"DIV",{class:!0});var ha=d(Ae);w(yo.$$.fragment,ha),Hd=p(ha),ko=s(ha,"P",{});var fa=d(ko);Ud=r(fa,"Instantiate a "),At=s(fa,"A",{href:!0});var Up=d(At);Zd=r(Up,"VisionEncoderDecoderConfig"),Up.forEach(t),Yd=r(fa,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fa.forEach(t),ha.forEach(t),Jd=p(W),Se=s(W,"DIV",{class:!0});var ga=d(Se);w(xo.$$.fragment,ga),Kd=p(ga),me=s(ga,"P",{});var nn=d(me);Qd=r(nn,"Serializes this instance to a Python dictionary. Override the default "),Wn=s(nn,"EM",{});var Zp=d(Wn);Xd=r(Zp,"to_dict()"),Zp.forEach(t),ei=r(nn," from "),Hn=s(nn,"EM",{});var Yp=d(Hn);oi=r(Yp,"PretrainedConfig"),Yp.forEach(t),ti=r(nn,"."),nn.forEach(t),ga.forEach(t),W.forEach(t),Ur=p(o),he=s(o,"H2",{class:!0});var ua=d(he);Ie=s(ua,"A",{id:!0,class:!0,href:!0});var Jp=d(Ie);Un=s(Jp,"SPAN",{});var Kp=d(Un);w($o.$$.fragment,Kp),Kp.forEach(t),Jp.forEach(t),ni=p(ua),Zn=s(ua,"SPAN",{});var Qp=d(Zn);ri=r(Qp,"VisionEncoderDecoderModel"),Qp.forEach(t),ua.forEach(t),Zr=p(o),M=s(o,"DIV",{class:!0});var P=d(M);w(jo.$$.fragment,P),ai=p(P),fe=s(P,"P",{});var rn=d(fe);si=r(rn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=s(rn,"A",{href:!0});var Xp=d(St);di=r(Xp,"from_pretrained()"),Xp.forEach(t),ii=r(rn," function and the decoder is loaded via "),It=s(rn,"A",{href:!0});var em=d(It);ci=r(em,"from_pretrained()"),em.forEach(t),li=r(rn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),rn.forEach(t),pi=p(P),Vo=s(P,"P",{});var _a=d(Vo);mi=r(_a,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Mo=s(_a,"A",{href:!0,rel:!0});var om=d(Mo);hi=r(om,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),om.forEach(t),fi=r(_a,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_a.forEach(t),gi=p(P),Do=s(P,"P",{});var va=d(Do);ui=r(va,"Additionally, in "),qo=s(va,"A",{href:!0,rel:!0});var tm=d(qo);_i=r(tm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),tm.forEach(t),vi=r(va,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),va.forEach(t),bi=p(P),Yn=s(P,"P",{});var nm=d(Yn);wi=r(nm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),nm.forEach(t),Ei=p(P),Fo=s(P,"P",{});var ba=d(Fo);Ti=r(ba,"This model inherits from "),Lt=s(ba,"A",{href:!0});var rm=d(Lt);yi=r(rm,"PreTrainedModel"),rm.forEach(t),ki=r(ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba.forEach(t),xi=p(P),zo=s(P,"P",{});var wa=d(zo);$i=r(wa,"This model is also a PyTorch "),Po=s(wa,"A",{href:!0,rel:!0});var am=d(Po);ji=r(am,"torch.nn.Module"),am.forEach(t),Vi=r(wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wa.forEach(t),Mi=p(P),Q=s(P,"P",{});var it=d(Q);Nt=s(it,"A",{href:!0});var sm=d(Nt);Di=r(sm,"VisionEncoderDecoderModel"),sm.forEach(t),qi=r(it,` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=s(it,"EM",{});var dm=d(Jn);Fi=r(dm,"~transformers.AutoModel.from_pretrained"),dm.forEach(t),zi=r(it,` class method for the encoder and
:meth`),Kn=s(it,"EM",{});var im=d(Kn);Pi=r(im,"~transformers.AutoModelForCausalLM.from_pretrained"),im.forEach(t),Ci=r(it," class method for the decoder."),it.forEach(t),Ai=p(P),O=s(P,"DIV",{class:!0});var Qe=d(O);w(Co.$$.fragment,Qe),Si=p(Qe),ge=s(Qe,"P",{});var an=d(ge);Ii=r(an,"The "),Ot=s(an,"A",{href:!0});var cm=d(Ot);Li=r(cm,"VisionEncoderDecoderModel"),cm.forEach(t),Ni=r(an," forward method, overrides the "),Qn=s(an,"CODE",{});var lm=d(Qn);Oi=r(lm,"__call__"),lm.forEach(t),Ri=r(an," special method."),an.forEach(t),Bi=p(Qe),w(Le.$$.fragment,Qe),Gi=p(Qe),w(Ne.$$.fragment,Qe),Qe.forEach(t),Wi=p(P),R=s(P,"DIV",{class:!0});var Xe=d(R);w(Ao.$$.fragment,Xe),Hi=p(Xe),Xn=s(Xe,"P",{});var pm=d(Xn);Ui=r(pm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pm.forEach(t),Zi=p(Xe),ue=s(Xe,"P",{});var sn=d(ue);Yi=r(sn,"The model is set in evaluation mode by default using "),er=s(sn,"CODE",{});var mm=d(er);Ji=r(mm,"model.eval()"),mm.forEach(t),Ki=r(sn,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=s(sn,"CODE",{});var hm=d(or);Qi=r(hm,"model.train()"),hm.forEach(t),Xi=r(sn,"."),sn.forEach(t),ec=p(Xe),w(Oe.$$.fragment,Xe),Xe.forEach(t),P.forEach(t),Yr=p(o),_e=s(o,"H2",{class:!0});var Ea=d(_e);Re=s(Ea,"A",{id:!0,class:!0,href:!0});var fm=d(Re);tr=s(fm,"SPAN",{});var gm=d(tr);w(So.$$.fragment,gm),gm.forEach(t),fm.forEach(t),oc=p(Ea),nr=s(Ea,"SPAN",{});var um=d(nr);tc=r(um,"TFVisionEncoderDecoderModel"),um.forEach(t),Ea.forEach(t),Jr=p(o),D=s(o,"DIV",{class:!0});var C=d(D);w(Io.$$.fragment,C),nc=p(C),ve=s(C,"P",{});var dn=d(ve);rc=r(dn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=s(dn,"A",{href:!0});var _m=d(Rt);ac=r(_m,"from_pretrained()"),_m.forEach(t),sc=r(dn," function and the decoder is loaded via "),Bt=s(dn,"A",{href:!0});var vm=d(Bt);dc=r(vm,"from_pretrained()"),vm.forEach(t),ic=r(dn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),dn.forEach(t),cc=p(C),Lo=s(C,"P",{});var Ta=d(Lo);lc=r(Ta,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=s(Ta,"A",{href:!0,rel:!0});var bm=d(No);pc=r(bm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),bm.forEach(t),mc=r(Ta,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ta.forEach(t),hc=p(C),Oo=s(C,"P",{});var ya=d(Oo);fc=r(ya,"Additionally, in "),Ro=s(ya,"A",{href:!0,rel:!0});var wm=d(Ro);gc=r(wm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),wm.forEach(t),uc=r(ya,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),ya.forEach(t),_c=p(C),rr=s(C,"P",{});var Em=d(rr);vc=r(Em,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Em.forEach(t),bc=p(C),Bo=s(C,"P",{});var ka=d(Bo);wc=r(ka,"This model inherits from "),Gt=s(ka,"A",{href:!0});var Tm=d(Gt);Ec=r(Tm,"TFPreTrainedModel"),Tm.forEach(t),Tc=r(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(t),yc=p(C),Go=s(C,"P",{});var xa=d(Go);kc=r(xa,"This model is also a "),Wo=s(xa,"A",{href:!0,rel:!0});var ym=d(Wo);xc=r(ym,"tf.keras.Model"),ym.forEach(t),$c=r(xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xa.forEach(t),jc=p(C),X=s(C,"P",{});var ct=d(X);Wt=s(ct,"A",{href:!0});var km=d(Wt);Vc=r(km,"TFVisionEncoderDecoderModel"),km.forEach(t),Mc=r(ct,` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=s(ct,"A",{href:!0});var xm=d(Ht);Dc=r(xm,"from_pretrained()"),xm.forEach(t),qc=r(ct,` class method for the encoder and
`),Ut=s(ct,"A",{href:!0});var $m=d(Ut);Fc=r($m,"from_pretrained()"),$m.forEach(t),zc=r(ct," class method for the decoder."),ct.forEach(t),Pc=p(C),B=s(C,"DIV",{class:!0});var eo=d(B);w(Ho.$$.fragment,eo),Cc=p(eo),be=s(eo,"P",{});var cn=d(be);Ac=r(cn,"The "),Zt=s(cn,"A",{href:!0});var jm=d(Zt);Sc=r(jm,"TFVisionEncoderDecoderModel"),jm.forEach(t),Ic=r(cn," forward method, overrides the "),ar=s(cn,"CODE",{});var Vm=d(ar);Lc=r(Vm,"__call__"),Vm.forEach(t),Nc=r(cn," special method."),cn.forEach(t),Oc=p(eo),w(Be.$$.fragment,eo),Rc=p(eo),w(Ge.$$.fragment,eo),eo.forEach(t),Bc=p(C),ee=s(C,"DIV",{class:!0});var ln=d(ee);w(Uo.$$.fragment,ln),Gc=p(ln),sr=s(ln,"P",{});var Mm=d(sr);Wc=r(Mm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Mm.forEach(t),Hc=p(ln),w(We.$$.fragment,ln),ln.forEach(t),C.forEach(t),Kr=p(o),we=s(o,"H2",{class:!0});var $a=d(we);He=s($a,"A",{id:!0,class:!0,href:!0});var Dm=d(He);dr=s(Dm,"SPAN",{});var qm=d(dr);w(Zo.$$.fragment,qm),qm.forEach(t),Dm.forEach(t),Uc=p($a),ir=s($a,"SPAN",{});var Fm=d(ir);Zc=r(Fm,"FlaxVisionEncoderDecoderModel"),Fm.forEach(t),$a.forEach(t),Qr=p(o),q=s(o,"DIV",{class:!0});var A=d(q);w(Yo.$$.fragment,A),Yc=p(A),Ee=s(A,"P",{});var pn=d(Ee);Jc=r(pn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=s(pn,"A",{href:!0});var zm=d(Yt);Kc=r(zm,"from_pretrained()"),zm.forEach(t),Qc=r(pn," function and the decoder is loaded via "),Jt=s(pn,"A",{href:!0});var Pm=d(Jt);Xc=r(Pm,"from_pretrained()"),Pm.forEach(t),el=r(pn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pn.forEach(t),ol=p(A),Jo=s(A,"P",{});var ja=d(Jo);tl=r(ja,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=s(ja,"A",{href:!0,rel:!0});var Cm=d(Ko);nl=r(Cm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cm.forEach(t),rl=r(ja,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ja.forEach(t),al=p(A),Qo=s(A,"P",{});var Va=d(Qo);sl=r(Va,"Additionally, in "),Xo=s(Va,"A",{href:!0,rel:!0});var Am=d(Xo);dl=r(Am,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Am.forEach(t),il=r(Va,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Va.forEach(t),cl=p(A),cr=s(A,"P",{});var Sm=d(cr);ll=r(Sm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Sm.forEach(t),pl=p(A),et=s(A,"P",{});var Ma=d(et);ml=r(Ma,"This model inherits from "),Kt=s(Ma,"A",{href:!0});var Im=d(Kt);hl=r(Im,"FlaxPreTrainedModel"),Im.forEach(t),fl=r(Ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ma.forEach(t),gl=p(A),ot=s(A,"P",{});var Da=d(ot);ul=r(Da,`This model is also a Flax Linen
`),tt=s(Da,"A",{href:!0,rel:!0});var Lm=d(tt);_l=r(Lm,"flax.nn.Module"),Lm.forEach(t),vl=r(Da,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Da.forEach(t),bl=p(A),oe=s(A,"P",{});var lt=d(oe);Qt=s(lt,"A",{href:!0});var Nm=d(Qt);wl=r(Nm,"FlaxVisionEncoderDecoderModel"),Nm.forEach(t),El=r(lt,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),lr=s(lt,"EM",{});var Om=d(lr);Tl=r(Om,"~transformers.FlaxAutoModel.from_pretrained"),Om.forEach(t),yl=r(lt,` class method
for the encoder and :meth`),pr=s(lt,"EM",{});var Rm=d(pr);kl=r(Rm,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rm.forEach(t),xl=r(lt," class method for the decoder."),lt.forEach(t),$l=p(A),G=s(A,"DIV",{class:!0});var oo=d(G);w(nt.$$.fragment,oo),jl=p(oo),Te=s(oo,"P",{});var mn=d(Te);Vl=r(mn,"The "),Xt=s(mn,"A",{href:!0});var Bm=d(Xt);Ml=r(Bm,"FlaxVisionEncoderDecoderModel"),Bm.forEach(t),Dl=r(mn," forward method, overrides the "),mr=s(mn,"CODE",{});var Gm=d(mr);ql=r(Gm,"__call__"),Gm.forEach(t),Fl=r(mn," special method."),mn.forEach(t),zl=p(oo),w(Ue.$$.fragment,oo),Pl=p(oo),w(Ze.$$.fragment,oo),oo.forEach(t),Cl=p(A),te=s(A,"DIV",{class:!0});var hn=d(te);w(rt.$$.fragment,hn),Al=p(hn),hr=s(hn,"P",{});var Wm=d(hr);Sl=r(Wm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wm.forEach(t),Il=p(hn),w(Ye.$$.fragment,hn),hn.forEach(t),A.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(ih)),c(f,"id","vision-encoder-decoder-models"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#vision-encoder-decoder-models"),c(_,"class","relative group"),c(ye,"id","overview"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#overview"),c(ne,"class","relative group"),c(ht,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(ft,"href","vit"),c(gt,"href","beit"),c(ut,"href","deit"),c(_t,"href","swin"),c(vt,"href","roberta"),c(bt,"href","gpt2"),c(wt,"href","bert"),c(Et,"href","distilbert"),c(no,"href","https://arxiv.org/abs/2109.10282"),c(no,"rel","nofollow"),c(Tt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(yt,"href","trocr"),c(kt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($e,"id","randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#randomly-initializing-visionencoderdecodermodel-from-model-configurations"),c(re,"class","relative group"),c(xt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c($t,"href","/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTModel"),c(je,"id","initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),c(ae,"class","relative group"),c(jt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Vt,"href","swin"),c(Mt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Ve,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),c(Ve,"rel","nofollow"),c(Dt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained"),c(Me,"id","loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),c(se,"class","relative group"),c(qt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(qe,"id","loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),c(de,"class","relative group"),c(Fe,"id","training"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#training"),c(ce,"class","relative group"),c(bo,"href","https://github.com/nielsrogge"),c(bo,"rel","nofollow"),c(wo,"href","https://github.com/ydshieh"),c(wo,"rel","nofollow"),c(ze,"id","transformers.VisionEncoderDecoderConfig"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.VisionEncoderDecoderConfig"),c(le,"class","relative group"),c(Ft,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(zt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Pt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ct,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(At,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.VisionEncoderDecoderModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.VisionEncoderDecoderModel"),c(he,"class","relative group"),c(St,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(It,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Mo,"href","https://arxiv.org/abs/1907.12461"),c(Mo,"rel","nofollow"),c(qo,"href","https://arxiv.org/abs/2109.10282"),c(qo,"rel","nofollow"),c(Lt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(Nt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Ot,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"id","transformers.TFVisionEncoderDecoderModel"),c(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Re,"href","#transformers.TFVisionEncoderDecoderModel"),c(_e,"class","relative group"),c(Rt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Bt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(No,"href","https://arxiv.org/abs/1907.12461"),c(No,"rel","nofollow"),c(Ro,"href","https://arxiv.org/abs/2109.10282"),c(Ro,"rel","nofollow"),c(Gt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Wt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(Ht,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ut,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Zt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.FlaxVisionEncoderDecoderModel"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.FlaxVisionEncoderDecoderModel"),c(we,"class","relative group"),c(Yt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Jt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Ko,"href","https://arxiv.org/abs/1907.12461"),c(Ko,"rel","nofollow"),c(Xo,"href","https://arxiv.org/abs/2109.10282"),c(Xo,"rel","nofollow"),c(Kt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(tt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(tt,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(Xt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),g(o,x,m),g(o,_,m),e(_,f),e(f,v),E(i,v,null),e(_,u),e(_,I),e(I,qa),g(o,yr,m),g(o,ne,m),e(ne,ye),e(ye,fn),E(to,fn,null),e(ne,Fa),e(ne,gn),e(gn,za),g(o,kr,m),g(o,$,m),e($,Pa),e($,ht),e(ht,Ca),e($,Aa),e($,un),e(un,Sa),e($,Ia),e($,ft),e(ft,La),e($,Na),e($,gt),e(gt,Oa),e($,Ra),e($,ut),e(ut,Ba),e($,Ga),e($,_t),e(_t,Wa),e($,Ha),e($,_n),e(_n,Ua),e($,Za),e($,vt),e(vt,Ya),e($,Ja),e($,bt),e(bt,Ka),e($,Qa),e($,wt),e(wt,Xa),e($,es),e($,Et),e(Et,os),e($,ts),g(o,xr,m),g(o,ke,m),e(ke,ns),e(ke,no),e(no,rs),e(ke,as),g(o,$r,m),g(o,xe,m),e(xe,ss),e(xe,Tt),e(Tt,ds),e(xe,is),g(o,jr,m),g(o,J,m),e(J,cs),e(J,yt),e(yt,ls),e(J,ps),e(J,kt),e(kt,ms),e(J,hs),g(o,Vr,m),g(o,re,m),e(re,$e),e($e,vn),E(ro,vn,null),e(re,fs),e(re,ao),e(ao,gs),e(ao,bn),e(bn,us),e(ao,_s),g(o,Mr,m),g(o,Z,m),e(Z,xt),e(xt,vs),e(Z,bs),e(Z,$t),e($t,ws),e(Z,Es),e(Z,wn),e(wn,Ts),e(Z,ys),g(o,Dr,m),E(so,o,m),g(o,qr,m),g(o,ae,m),e(ae,je),e(je,En),E(io,En,null),e(ae,ks),e(ae,co),e(co,xs),e(co,Tn),e(Tn,$s),e(co,js),g(o,Fr,m),g(o,V,m),e(V,jt),e(jt,Vs),e(V,Ms),e(V,yn),e(yn,Ds),e(V,qs),e(V,Vt),e(Vt,Fs),e(V,zs),e(V,kn),e(kn,Ps),e(V,Cs),e(V,xn),e(xn,As),e(V,Ss),e(V,$n),e($n,Is),e(V,Ls),e(V,Mt),e(Mt,Ns),e(V,Os),e(V,Ve),e(Ve,Rs),e(Ve,jn),e(jn,Bs),e(V,Gs),e(V,Vn),e(Vn,Ws),e(V,Hs),e(V,Dt),e(Dt,Us),e(V,Zs),g(o,zr,m),E(lo,o,m),g(o,Pr,m),g(o,se,m),e(se,Me),e(Me,Mn),E(po,Mn,null),e(se,Ys),e(se,mo),e(mo,Js),e(mo,Dn),e(Dn,Ks),e(mo,Qs),g(o,Cr,m),g(o,L,m),e(L,Xs),e(L,qn),e(qn,ed),e(L,od),e(L,qt),e(qt,td),e(L,nd),e(L,Fn),e(Fn,rd),e(L,ad),g(o,Ar,m),g(o,De,m),e(De,sd),e(De,zn),e(zn,dd),e(De,id),g(o,Sr,m),E(ho,o,m),g(o,Ir,m),g(o,de,m),e(de,qe),e(qe,Pn),E(fo,Pn,null),e(de,cd),e(de,go),e(go,ld),e(go,Cn),e(Cn,pd),e(go,md),g(o,Lr,m),g(o,ie,m),e(ie,An),e(An,hd),e(ie,fd),e(ie,Sn),e(Sn,gd),e(ie,ud),g(o,Nr,m),E(uo,o,m),g(o,Or,m),g(o,ce,m),e(ce,Fe),e(Fe,In),E(_o,In,null),e(ce,_d),e(ce,Ln),e(Ln,vd),g(o,Rr,m),g(o,N,m),e(N,bd),e(N,Nn),e(Nn,wd),e(N,Ed),e(N,On),e(On,Td),e(N,yd),e(N,Rn),e(Rn,kd),e(N,xd),g(o,Br,m),E(vo,o,m),g(o,Gr,m),g(o,K,m),e(K,$d),e(K,bo),e(bo,jd),e(K,Vd),e(K,wo),e(wo,Md),e(K,Dd),g(o,Wr,m),g(o,le,m),e(le,ze),e(ze,Bn),E(Eo,Bn,null),e(le,qd),e(le,Gn),e(Gn,Fd),g(o,Hr,m),g(o,S,m),E(To,S,null),e(S,zd),e(S,Pe),e(Pe,Ft),e(Ft,Pd),e(Pe,Cd),e(Pe,zt),e(zt,Ad),e(Pe,Sd),e(S,Id),e(S,pe),e(pe,Ld),e(pe,Pt),e(Pt,Nd),e(pe,Od),e(pe,Ct),e(Ct,Rd),e(pe,Bd),e(S,Gd),E(Ce,S,null),e(S,Wd),e(S,Ae),E(yo,Ae,null),e(Ae,Hd),e(Ae,ko),e(ko,Ud),e(ko,At),e(At,Zd),e(ko,Yd),e(S,Jd),e(S,Se),E(xo,Se,null),e(Se,Kd),e(Se,me),e(me,Qd),e(me,Wn),e(Wn,Xd),e(me,ei),e(me,Hn),e(Hn,oi),e(me,ti),g(o,Ur,m),g(o,he,m),e(he,Ie),e(Ie,Un),E($o,Un,null),e(he,ni),e(he,Zn),e(Zn,ri),g(o,Zr,m),g(o,M,m),E(jo,M,null),e(M,ai),e(M,fe),e(fe,si),e(fe,St),e(St,di),e(fe,ii),e(fe,It),e(It,ci),e(fe,li),e(M,pi),e(M,Vo),e(Vo,mi),e(Vo,Mo),e(Mo,hi),e(Vo,fi),e(M,gi),e(M,Do),e(Do,ui),e(Do,qo),e(qo,_i),e(Do,vi),e(M,bi),e(M,Yn),e(Yn,wi),e(M,Ei),e(M,Fo),e(Fo,Ti),e(Fo,Lt),e(Lt,yi),e(Fo,ki),e(M,xi),e(M,zo),e(zo,$i),e(zo,Po),e(Po,ji),e(zo,Vi),e(M,Mi),e(M,Q),e(Q,Nt),e(Nt,Di),e(Q,qi),e(Q,Jn),e(Jn,Fi),e(Q,zi),e(Q,Kn),e(Kn,Pi),e(Q,Ci),e(M,Ai),e(M,O),E(Co,O,null),e(O,Si),e(O,ge),e(ge,Ii),e(ge,Ot),e(Ot,Li),e(ge,Ni),e(ge,Qn),e(Qn,Oi),e(ge,Ri),e(O,Bi),E(Le,O,null),e(O,Gi),E(Ne,O,null),e(M,Wi),e(M,R),E(Ao,R,null),e(R,Hi),e(R,Xn),e(Xn,Ui),e(R,Zi),e(R,ue),e(ue,Yi),e(ue,er),e(er,Ji),e(ue,Ki),e(ue,or),e(or,Qi),e(ue,Xi),e(R,ec),E(Oe,R,null),g(o,Yr,m),g(o,_e,m),e(_e,Re),e(Re,tr),E(So,tr,null),e(_e,oc),e(_e,nr),e(nr,tc),g(o,Jr,m),g(o,D,m),E(Io,D,null),e(D,nc),e(D,ve),e(ve,rc),e(ve,Rt),e(Rt,ac),e(ve,sc),e(ve,Bt),e(Bt,dc),e(ve,ic),e(D,cc),e(D,Lo),e(Lo,lc),e(Lo,No),e(No,pc),e(Lo,mc),e(D,hc),e(D,Oo),e(Oo,fc),e(Oo,Ro),e(Ro,gc),e(Oo,uc),e(D,_c),e(D,rr),e(rr,vc),e(D,bc),e(D,Bo),e(Bo,wc),e(Bo,Gt),e(Gt,Ec),e(Bo,Tc),e(D,yc),e(D,Go),e(Go,kc),e(Go,Wo),e(Wo,xc),e(Go,$c),e(D,jc),e(D,X),e(X,Wt),e(Wt,Vc),e(X,Mc),e(X,Ht),e(Ht,Dc),e(X,qc),e(X,Ut),e(Ut,Fc),e(X,zc),e(D,Pc),e(D,B),E(Ho,B,null),e(B,Cc),e(B,be),e(be,Ac),e(be,Zt),e(Zt,Sc),e(be,Ic),e(be,ar),e(ar,Lc),e(be,Nc),e(B,Oc),E(Be,B,null),e(B,Rc),E(Ge,B,null),e(D,Bc),e(D,ee),E(Uo,ee,null),e(ee,Gc),e(ee,sr),e(sr,Wc),e(ee,Hc),E(We,ee,null),g(o,Kr,m),g(o,we,m),e(we,He),e(He,dr),E(Zo,dr,null),e(we,Uc),e(we,ir),e(ir,Zc),g(o,Qr,m),g(o,q,m),E(Yo,q,null),e(q,Yc),e(q,Ee),e(Ee,Jc),e(Ee,Yt),e(Yt,Kc),e(Ee,Qc),e(Ee,Jt),e(Jt,Xc),e(Ee,el),e(q,ol),e(q,Jo),e(Jo,tl),e(Jo,Ko),e(Ko,nl),e(Jo,rl),e(q,al),e(q,Qo),e(Qo,sl),e(Qo,Xo),e(Xo,dl),e(Qo,il),e(q,cl),e(q,cr),e(cr,ll),e(q,pl),e(q,et),e(et,ml),e(et,Kt),e(Kt,hl),e(et,fl),e(q,gl),e(q,ot),e(ot,ul),e(ot,tt),e(tt,_l),e(ot,vl),e(q,bl),e(q,oe),e(oe,Qt),e(Qt,wl),e(oe,El),e(oe,lr),e(lr,Tl),e(oe,yl),e(oe,pr),e(pr,kl),e(oe,xl),e(q,$l),e(q,G),E(nt,G,null),e(G,jl),e(G,Te),e(Te,Vl),e(Te,Xt),e(Xt,Ml),e(Te,Dl),e(Te,mr),e(mr,ql),e(Te,Fl),e(G,zl),E(Ue,G,null),e(G,Pl),E(Ze,G,null),e(q,Cl),e(q,te),E(rt,te,null),e(te,Al),e(te,hr),e(hr,Sl),e(te,Il),E(Ye,te,null),Xr=!0},p(o,[m]){const at={};m&2&&(at.$$scope={dirty:m,ctx:o}),Ce.$set(at);const fr={};m&2&&(fr.$$scope={dirty:m,ctx:o}),Le.$set(fr);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:o}),Ne.$set(gr);const ur={};m&2&&(ur.$$scope={dirty:m,ctx:o}),Oe.$set(ur);const st={};m&2&&(st.$$scope={dirty:m,ctx:o}),Be.$set(st);const _r={};m&2&&(_r.$$scope={dirty:m,ctx:o}),Ge.$set(_r);const vr={};m&2&&(vr.$$scope={dirty:m,ctx:o}),We.$set(vr);const br={};m&2&&(br.$$scope={dirty:m,ctx:o}),Ue.$set(br);const j={};m&2&&(j.$$scope={dirty:m,ctx:o}),Ze.$set(j);const wr={};m&2&&(wr.$$scope={dirty:m,ctx:o}),Ye.$set(wr)},i(o){Xr||(T(i.$$.fragment,o),T(to.$$.fragment,o),T(ro.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(_o.$$.fragment,o),T(vo.$$.fragment,o),T(Eo.$$.fragment,o),T(To.$$.fragment,o),T(Ce.$$.fragment,o),T(yo.$$.fragment,o),T(xo.$$.fragment,o),T($o.$$.fragment,o),T(jo.$$.fragment,o),T(Co.$$.fragment,o),T(Le.$$.fragment,o),T(Ne.$$.fragment,o),T(Ao.$$.fragment,o),T(Oe.$$.fragment,o),T(So.$$.fragment,o),T(Io.$$.fragment,o),T(Ho.$$.fragment,o),T(Be.$$.fragment,o),T(Ge.$$.fragment,o),T(Uo.$$.fragment,o),T(We.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(nt.$$.fragment,o),T(Ue.$$.fragment,o),T(Ze.$$.fragment,o),T(rt.$$.fragment,o),T(Ye.$$.fragment,o),Xr=!0)},o(o){y(i.$$.fragment,o),y(to.$$.fragment,o),y(ro.$$.fragment,o),y(so.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(Eo.$$.fragment,o),y(To.$$.fragment,o),y(Ce.$$.fragment,o),y(yo.$$.fragment,o),y(xo.$$.fragment,o),y($o.$$.fragment,o),y(jo.$$.fragment,o),y(Co.$$.fragment,o),y(Le.$$.fragment,o),y(Ne.$$.fragment,o),y(Ao.$$.fragment,o),y(Oe.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ho.$$.fragment,o),y(Be.$$.fragment,o),y(Ge.$$.fragment,o),y(Uo.$$.fragment,o),y(We.$$.fragment,o),y(Zo.$$.fragment,o),y(Yo.$$.fragment,o),y(nt.$$.fragment,o),y(Ue.$$.fragment,o),y(Ze.$$.fragment,o),y(rt.$$.fragment,o),y(Ye.$$.fragment,o),Xr=!1},d(o){t(h),o&&t(x),o&&t(_),k(i),o&&t(yr),o&&t(ne),k(to),o&&t(kr),o&&t($),o&&t(xr),o&&t(ke),o&&t($r),o&&t(xe),o&&t(jr),o&&t(J),o&&t(Vr),o&&t(re),k(ro),o&&t(Mr),o&&t(Z),o&&t(Dr),k(so,o),o&&t(qr),o&&t(ae),k(io),o&&t(Fr),o&&t(V),o&&t(zr),k(lo,o),o&&t(Pr),o&&t(se),k(po),o&&t(Cr),o&&t(L),o&&t(Ar),o&&t(De),o&&t(Sr),k(ho,o),o&&t(Ir),o&&t(de),k(fo),o&&t(Lr),o&&t(ie),o&&t(Nr),k(uo,o),o&&t(Or),o&&t(ce),k(_o),o&&t(Rr),o&&t(N),o&&t(Br),k(vo,o),o&&t(Gr),o&&t(K),o&&t(Wr),o&&t(le),k(Eo),o&&t(Hr),o&&t(S),k(To),k(Ce),k(yo),k(xo),o&&t(Ur),o&&t(he),k($o),o&&t(Zr),o&&t(M),k(jo),k(Co),k(Le),k(Ne),k(Ao),k(Oe),o&&t(Yr),o&&t(_e),k(So),o&&t(Jr),o&&t(D),k(Io),k(Ho),k(Be),k(Ge),k(Uo),k(We),o&&t(Kr),o&&t(we),k(Zo),o&&t(Qr),o&&t(q),k(Yo),k(nt),k(Ue),k(Ze),k(rt),k(Ye)}}}const ih={local:"vision-encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-visionencoderdecodermodel-from-model-configurations",title:"Randomly initializing `VisionEncoderDecoderModel` from model configurations."},{local:"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `VisionEncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `VisionEncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFVisionEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.TFVisionEncoderDecoderModel",title:"TFVisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function ch(F){return Jm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class uh extends Hm{constructor(h){super();Um(this,h,ch,dh,Zm,{})}}export{uh as default,ih as metadata};
