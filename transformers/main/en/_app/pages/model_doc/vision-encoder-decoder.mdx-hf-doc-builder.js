import{S as Hm,i as Um,s as Zm,e as a,k as c,w as b,t as n,M as Ym,c as s,d as t,m as p,a as i,x as w,h as r,b as l,G as e,g,y as E,q as T,o as y,B as k,v as Jm,L as mt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nc}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Km(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model (with random weights) from a ViT & bert-base-uncased style configurations
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model (with random weights) from a ViT &amp; bert-base-uncased style configurations</span>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){h=a("p"),x=n("Examples:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function Qm(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function Xm(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),{c(){h=a("p"),x=n("Examples:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function eh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import VisionEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function oh(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function th(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){h=a("p"),x=n("Examples:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function nh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import TFVisionEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function rh(z){let h,x,_,f,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var I=i(_);f=r(I,"Module"),I.forEach(t),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){g(d,h,u),e(h,x),e(h,_),e(_,f),e(h,v)},d(d){d&&t(h)}}}function ah(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){h=a("p"),x=n("Examples:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Examples:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function sh(z){let h,x,_,f,v;return f=new U({props:{code:`from transformers import FlaxVisionEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){h=a("p"),x=n("Example:"),_=c(),b(f.$$.fragment)},l(d){h=s(d,"P",{});var u=i(h);x=r(u,"Example:"),u.forEach(t),_=p(d),w(f.$$.fragment,d)},m(d,u){g(d,h,u),e(h,x),g(d,_,u),E(f,d,u),v=!0},p:mt,i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){y(f.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),k(f,d)}}}function ih(z){let h,x,_,f,v,d,u,I,qa,yr,ne,ye,fn,to,za,gn,Pa,kr,$,Fa,ht,Aa,Ca,un,Sa,Ia,ft,La,Na,gt,Oa,Ra,ut,Ba,Ga,_t,Wa,Ha,_n,Ua,Za,vt,Ya,Ja,bt,Ka,Qa,wt,Xa,es,Et,os,ts,xr,ke,ns,no,rs,as,$r,xe,ss,Tt,is,ds,jr,J,ls,yt,cs,ps,kt,ms,hs,Mr,re,$e,vn,ro,fs,ao,gs,bn,us,_s,Dr,Z,xt,vs,bs,$t,ws,Es,wn,Ts,ys,Vr,so,qr,ae,je,En,io,ks,lo,xs,Tn,$s,js,zr,M,jt,Ms,Ds,yn,Vs,qs,Mt,zs,Ps,kn,Fs,As,xn,Cs,Ss,$n,Is,Ls,Dt,Ns,Os,Me,Rs,jn,Bs,Gs,Mn,Ws,Hs,Vt,Us,Zs,Pr,co,Fr,se,De,Dn,po,Ys,mo,Js,Vn,Ks,Qs,Ar,L,Xs,qn,ei,oi,qt,ti,ni,zn,ri,ai,Cr,Ve,si,Pn,ii,di,Sr,ho,Ir,ie,qe,Fn,fo,li,go,ci,An,pi,mi,Lr,de,Cn,hi,fi,Sn,gi,ui,Nr,uo,Or,le,ze,In,_o,_i,Ln,vi,Rr,N,bi,Nn,wi,Ei,On,Ti,yi,Rn,ki,xi,Br,vo,Gr,K,$i,bo,ji,Mi,wo,Di,Vi,Wr,ce,Pe,Bn,Eo,qi,Gn,zi,Hr,S,To,Pi,Fe,zt,Fi,Ai,Pt,Ci,Si,Ii,pe,Li,Ft,Ni,Oi,At,Ri,Bi,Gi,Ae,Wi,Ce,yo,Hi,ko,Ui,Ct,Zi,Yi,Ji,Se,xo,Ki,me,Qi,Wn,Xi,ed,Hn,od,td,Ur,he,Ie,Un,$o,nd,Zn,rd,Zr,D,jo,ad,fe,sd,St,id,dd,It,ld,cd,pd,Mo,md,Do,hd,fd,gd,Vo,ud,qo,_d,vd,bd,Yn,wd,Ed,zo,Td,Lt,yd,kd,xd,Po,$d,Fo,jd,Md,Dd,Q,Nt,Vd,qd,Jn,zd,Pd,Kn,Fd,Ad,Cd,O,Ao,Sd,ge,Id,Ot,Ld,Nd,Qn,Od,Rd,Bd,Le,Gd,Ne,Wd,R,Co,Hd,Xn,Ud,Zd,ue,Yd,er,Jd,Kd,or,Qd,Xd,el,Oe,Yr,_e,Re,tr,So,ol,nr,tl,Jr,V,Io,nl,ve,rl,Rt,al,sl,Bt,il,dl,ll,Lo,cl,No,pl,ml,hl,Oo,fl,Ro,gl,ul,_l,rr,vl,bl,Bo,wl,Gt,El,Tl,yl,Go,kl,Wo,xl,$l,jl,X,Wt,Ml,Dl,Ht,Vl,ql,Ut,zl,Pl,Fl,B,Ho,Al,be,Cl,Zt,Sl,Il,ar,Ll,Nl,Ol,Be,Rl,Ge,Bl,ee,Uo,Gl,sr,Wl,Hl,We,Kr,we,He,ir,Zo,Ul,dr,Zl,Qr,q,Yo,Yl,Ee,Jl,Yt,Kl,Ql,Jt,Xl,ec,oc,Jo,tc,Ko,nc,rc,ac,Qo,sc,Xo,ic,dc,lc,lr,cc,pc,et,mc,Kt,hc,fc,gc,ot,uc,tt,_c,vc,bc,oe,Qt,wc,Ec,cr,Tc,yc,pr,kc,xc,$c,G,nt,jc,Te,Mc,Xt,Dc,Vc,mr,qc,zc,Pc,Ue,Fc,Ze,Ac,te,rt,Cc,hr,Sc,Ic,Ye,Xr;return d=new Y({}),to=new Y({}),ro=new Y({}),so=new U({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
model = VisionEncoderDecoderModel(config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)`}}),io=new Y({}),co=new U({props:{code:`from transformers import VisionEncoderDecoderModel

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
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L34"}}),Ae=new pt({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[Km]},$$scope:{ctx:z}}}),yo=new H({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L100",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),xo=new H({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),$o=new Y({}),jo=new H({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L151"}}),Ao=new H({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>). See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>~utils.Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisionEncoderDecoderModel.forward.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L519",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new Nc({props:{$$slots:{default:[Qm]},$$scope:{ctx:z}}}),Ne=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[Xm]},$$scope:{ctx:z}}}),Co=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L365"}}),Oe=new pt({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[eh]},$$scope:{ctx:z}}}),So=new Y({}),Io=new H({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L177"}}),Ho=new H({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
If set to <code>True</code>, the model will return a <code>~utils.Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014; Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L531",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Be=new Nc({props:{$$slots:{default:[oh]},$$scope:{ctx:z}}}),Ge=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[th]},$$scope:{ctx:z}}}),Uo=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L365"}}),We=new pt({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[nh]},$$scope:{ctx:z}}}),Zo=new Y({}),Yo=new H({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L268"}}),nt=new H({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>~utils.FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Nc({props:{$$slots:{default:[rh]},$$scope:{ctx:z}}}),Ze=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),rt=new H({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),Ye=new pt({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[sh]},$$scope:{ctx:z}}}),{c(){h=a("meta"),x=c(),_=a("h1"),f=a("a"),v=a("span"),b(d.$$.fragment),u=c(),I=a("span"),qa=n("Vision Encoder Decoder Models"),yr=c(),ne=a("h2"),ye=a("a"),fn=a("span"),b(to.$$.fragment),za=c(),gn=a("span"),Pa=n("Overview"),kr=c(),$=a("p"),Fa=n("The "),ht=a("a"),Aa=n("VisionEncoderDecoderModel"),Ca=n(` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=a("em"),Sa=n("e.g."),Ia=c(),ft=a("a"),La=n("ViT"),Na=n(", "),gt=a("a"),Oa=n("BEiT"),Ra=n(", "),ut=a("a"),Ba=n("DeiT"),Ga=n(", "),_t=a("a"),Wa=n("Swin"),Ha=n(`)
and any pretrained language model as the decoder (`),_n=a("em"),Ua=n("e.g."),Za=c(),vt=a("a"),Ya=n("RoBERTa"),Ja=n(", "),bt=a("a"),Ka=n("GPT2"),Qa=n(", "),wt=a("a"),Xa=n("BERT"),es=n(", "),Et=a("a"),os=n("DistilBERT"),ts=n(")."),xr=c(),ke=a("p"),ns=n(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=a("a"),rs=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),as=n(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),$r=c(),xe=a("p"),ss=n("After such a "),Tt=a("a"),is=n("VisionEncoderDecoderModel"),ds=n(` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),jr=c(),J=a("p"),ls=n(`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=a("a"),cs=n("TrOCR"),ps=n(", which is an instance of "),kt=a("a"),ms=n("VisionEncoderDecoderModel"),hs=n("."),Mr=c(),re=a("h2"),$e=a("a"),vn=a("span"),b(ro.$$.fragment),fs=c(),ao=a("span"),gs=n("Randomly initializing "),bn=a("code"),us=n("VisionEncoderDecoderModel"),_s=n(" from model configurations."),Dr=c(),Z=a("p"),xt=a("a"),vs=n("VisionEncoderDecoderModel"),bs=n(" can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=a("a"),ws=n("ViTModel"),Es=n(` configuration for the encoder
and the default `),wn=a("code"),Ts=n("BertForCausalLM"),ys=n(" configuration for the decoder."),Vr=c(),b(so.$$.fragment),qr=c(),ae=a("h2"),je=a("a"),En=a("span"),b(io.$$.fragment),ks=c(),lo=a("span"),xs=n("Initialising "),Tn=a("code"),$s=n("VisionEncoderDecoderModel"),js=n(" from a pretrained encoder and a pretrained decoder."),zr=c(),M=a("p"),jt=a("a"),Ms=n("VisionEncoderDecoderModel"),Ds=n(" can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=a("em"),Vs=n("e.g."),qs=c(),Mt=a("a"),zs=n("Swin"),Ps=n(", can serve as the encoder and both pretrained auto-encoding models, "),kn=a("em"),Fs=n("e.g."),As=n(" BERT, pretrained causal language models, "),xn=a("em"),Cs=n("e.g."),Ss=n(" GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=a("em"),Is=n("e.g."),Ls=n(` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Dt=a("a"),Ns=n("VisionEncoderDecoderModel"),Os=n(" from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=a("a"),Rs=n("the "),jn=a("em"),Bs=n("Warm-starting-encoder-decoder blog post"),Gs=n(`.
To do so, the `),Mn=a("code"),Ws=n("VisionEncoderDecoderModel"),Hs=n(" class provides a "),Vt=a("a"),Us=n("VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),Zs=n(" method."),Pr=c(),b(co.$$.fragment),Fr=c(),se=a("h2"),De=a("a"),Dn=a("span"),b(po.$$.fragment),Ys=c(),mo=a("span"),Js=n("Loading an existing "),Vn=a("code"),Ks=n("VisionEncoderDecoderModel"),Qs=n(" checkpoint and perform inference."),Ar=c(),L=a("p"),Xs=n("To load fine-tuned checkpoints of the "),qn=a("code"),ei=n("VisionEncoderDecoderModel"),oi=n(" class, "),qt=a("a"),ti=n("VisionEncoderDecoderModel"),ni=n(" provides the "),zn=a("code"),ri=n("from_pretrained(...)"),ai=n(" method just like any other model architecture in Transformers."),Cr=c(),Ve=a("p"),si=n("To perform inference, one uses the "),Pn=a("code"),ii=n("generate"),di=n(" method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),Sr=c(),b(ho.$$.fragment),Ir=c(),ie=a("h2"),qe=a("a"),Fn=a("span"),b(fo.$$.fragment),li=c(),go=a("span"),ci=n("Loading a PyTorch checkpoint into "),An=a("code"),pi=n("TFVisionEncoderDecoderModel"),mi=n("."),Lr=c(),de=a("p"),Cn=a("code"),hi=n("TFVisionEncoderDecoderModel.from_pretrained()"),fi=n(` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=a("code"),gi=n("from_pt=True"),ui=n(` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Nr=c(),b(uo.$$.fragment),Or=c(),le=a("h2"),ze=a("a"),In=a("span"),b(_o.$$.fragment),_i=c(),Ln=a("span"),vi=n("Training"),Rr=c(),N=a("p"),bi=n(`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=a("code"),wi=n("pixel_values"),Ei=n(` (which are the
images) and `),On=a("code"),Ti=n("labels"),yi=n(" (which are the "),Rn=a("code"),ki=n("input_ids"),xi=n(" of the encoded target sequence)."),Br=c(),b(vo.$$.fragment),Gr=c(),K=a("p"),$i=n("This model was contributed by "),bo=a("a"),ji=n("nielsr"),Mi=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=a("a"),Di=n("ydshieh"),Vi=n("."),Wr=c(),ce=a("h2"),Pe=a("a"),Bn=a("span"),b(Eo.$$.fragment),qi=c(),Gn=a("span"),zi=n("VisionEncoderDecoderConfig"),Hr=c(),S=a("div"),b(To.$$.fragment),Pi=c(),Fe=a("p"),zt=a("a"),Fi=n("VisionEncoderDecoderConfig"),Ai=n(` is the configuration class to store the configuration of a
`),Pt=a("a"),Ci=n("VisionEncoderDecoderModel"),Si=n(`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Ii=c(),pe=a("p"),Li=n("Configuration objects inherit from "),Ft=a("a"),Ni=n("PretrainedConfig"),Oi=n(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Ri=n("PretrainedConfig"),Bi=n(" for more information."),Gi=c(),b(Ae.$$.fragment),Wi=c(),Ce=a("div"),b(yo.$$.fragment),Hi=c(),ko=a("p"),Ui=n("Instantiate a "),Ct=a("a"),Zi=n("VisionEncoderDecoderConfig"),Yi=n(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Ji=c(),Se=a("div"),b(xo.$$.fragment),Ki=c(),me=a("p"),Qi=n("Serializes this instance to a Python dictionary. Override the default "),Wn=a("em"),Xi=n("to_dict()"),ed=n(" from "),Hn=a("em"),od=n("PretrainedConfig"),td=n("."),Ur=c(),he=a("h2"),Ie=a("a"),Un=a("span"),b($o.$$.fragment),nd=c(),Zn=a("span"),rd=n("VisionEncoderDecoderModel"),Zr=c(),D=a("div"),b(jo.$$.fragment),ad=c(),fe=a("p"),sd=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=a("a"),id=n("from_pretrained()"),dd=n(" function and the decoder is loaded via "),It=a("a"),ld=n("from_pretrained()"),cd=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pd=c(),Mo=a("p"),md=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Do=a("a"),hd=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fd=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gd=c(),Vo=a("p"),ud=n("Additionally, in "),qo=a("a"),_d=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),vd=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),bd=c(),Yn=a("p"),wd=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Ed=c(),zo=a("p"),Td=n("This model inherits from "),Lt=a("a"),yd=n("PreTrainedModel"),kd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=c(),Po=a("p"),$d=n("This model is also a PyTorch "),Fo=a("a"),jd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd=c(),Q=a("p"),Nt=a("a"),Vd=n("VisionEncoderDecoderModel"),qd=n(` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=a("em"),zd=n("~transformers.AutoModel.from_pretrained"),Pd=n(` class method for the encoder and
:meth`),Kn=a("em"),Fd=n("~transformers.AutoModelForCausalLM.from_pretrained"),Ad=n(" class method for the decoder."),Cd=c(),O=a("div"),b(Ao.$$.fragment),Sd=c(),ge=a("p"),Id=n("The "),Ot=a("a"),Ld=n("VisionEncoderDecoderModel"),Nd=n(" forward method, overrides the "),Qn=a("code"),Od=n("__call__"),Rd=n(" special method."),Bd=c(),b(Le.$$.fragment),Gd=c(),b(Ne.$$.fragment),Wd=c(),R=a("div"),b(Co.$$.fragment),Hd=c(),Xn=a("p"),Ud=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Zd=c(),ue=a("p"),Yd=n("The model is set in evaluation mode by default using "),er=a("code"),Jd=n("model.eval()"),Kd=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=a("code"),Qd=n("model.train()"),Xd=n("."),el=c(),b(Oe.$$.fragment),Yr=c(),_e=a("h2"),Re=a("a"),tr=a("span"),b(So.$$.fragment),ol=c(),nr=a("span"),tl=n("TFVisionEncoderDecoderModel"),Jr=c(),V=a("div"),b(Io.$$.fragment),nl=c(),ve=a("p"),rl=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=a("a"),al=n("from_pretrained()"),sl=n(" function and the decoder is loaded via "),Bt=a("a"),il=n("from_pretrained()"),dl=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),ll=c(),Lo=a("p"),cl=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=a("a"),pl=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ml=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),hl=c(),Oo=a("p"),fl=n("Additionally, in "),Ro=a("a"),gl=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),ul=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),_l=c(),rr=a("p"),vl=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),bl=c(),Bo=a("p"),wl=n("This model inherits from "),Gt=a("a"),El=n("TFPreTrainedModel"),Tl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl=c(),Go=a("p"),kl=n("This model is also a "),Wo=a("a"),xl=n("tf.keras.Model"),$l=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl=c(),X=a("p"),Wt=a("a"),Ml=n("TFVisionEncoderDecoderModel"),Dl=n(` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=a("a"),Vl=n("from_pretrained()"),ql=n(` class method for the encoder and
`),Ut=a("a"),zl=n("from_pretrained()"),Pl=n(" class method for the decoder."),Fl=c(),B=a("div"),b(Ho.$$.fragment),Al=c(),be=a("p"),Cl=n("The "),Zt=a("a"),Sl=n("TFVisionEncoderDecoderModel"),Il=n(" forward method, overrides the "),ar=a("code"),Ll=n("__call__"),Nl=n(" special method."),Ol=c(),b(Be.$$.fragment),Rl=c(),b(Ge.$$.fragment),Bl=c(),ee=a("div"),b(Uo.$$.fragment),Gl=c(),sr=a("p"),Wl=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Hl=c(),b(We.$$.fragment),Kr=c(),we=a("h2"),He=a("a"),ir=a("span"),b(Zo.$$.fragment),Ul=c(),dr=a("span"),Zl=n("FlaxVisionEncoderDecoderModel"),Qr=c(),q=a("div"),b(Yo.$$.fragment),Yl=c(),Ee=a("p"),Jl=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=a("a"),Kl=n("from_pretrained()"),Ql=n(" function and the decoder is loaded via "),Jt=a("a"),Xl=n("from_pretrained()"),ec=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),oc=c(),Jo=a("p"),tc=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=a("a"),nc=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),rc=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ac=c(),Qo=a("p"),sc=n("Additionally, in "),Xo=a("a"),ic=n(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),dc=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),lc=c(),lr=a("p"),cc=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),pc=c(),et=a("p"),mc=n("This model inherits from "),Kt=a("a"),hc=n("FlaxPreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=c(),ot=a("p"),uc=n(`This model is also a Flax Linen
`),tt=a("a"),_c=n("flax.nn.Module"),vc=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bc=c(),oe=a("p"),Qt=a("a"),wc=n("FlaxVisionEncoderDecoderModel"),Ec=n(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),cr=a("em"),Tc=n("~transformers.FlaxAutoModel.from_pretrained"),yc=n(` class method
for the encoder and :meth`),pr=a("em"),kc=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),xc=n(" class method for the decoder."),$c=c(),G=a("div"),b(nt.$$.fragment),jc=c(),Te=a("p"),Mc=n("The "),Xt=a("a"),Dc=n("FlaxVisionEncoderDecoderModel"),Vc=n(" forward method, overrides the "),mr=a("code"),qc=n("__call__"),zc=n(" special method."),Pc=c(),b(Ue.$$.fragment),Fc=c(),b(Ze.$$.fragment),Ac=c(),te=a("div"),b(rt.$$.fragment),Cc=c(),hr=a("p"),Sc=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ic=c(),b(Ye.$$.fragment),this.h()},l(o){const m=Ym('[data-svelte="svelte-1phssyn"]',document.head);h=s(m,"META",{name:!0,content:!0}),m.forEach(t),x=p(o),_=s(o,"H1",{class:!0});var at=i(_);f=s(at,"A",{id:!0,class:!0,href:!0});var fr=i(f);v=s(fr,"SPAN",{});var gr=i(v);w(d.$$.fragment,gr),gr.forEach(t),fr.forEach(t),u=p(at),I=s(at,"SPAN",{});var ur=i(I);qa=r(ur,"Vision Encoder Decoder Models"),ur.forEach(t),at.forEach(t),yr=p(o),ne=s(o,"H2",{class:!0});var st=i(ne);ye=s(st,"A",{id:!0,class:!0,href:!0});var _r=i(ye);fn=s(_r,"SPAN",{});var vr=i(fn);w(to.$$.fragment,vr),vr.forEach(t),_r.forEach(t),za=p(st),gn=s(st,"SPAN",{});var br=i(gn);Pa=r(br,"Overview"),br.forEach(t),st.forEach(t),kr=p(o),$=s(o,"P",{});var j=i($);Fa=r(j,"The "),ht=s(j,"A",{href:!0});var wr=i(ht);Aa=r(wr,"VisionEncoderDecoderModel"),wr.forEach(t),Ca=r(j,` can be used to initialize an image-to-text model with any
pretrained Transformer-based vision model as the encoder (`),un=s(j,"EM",{});var Oc=i(un);Sa=r(Oc,"e.g."),Oc.forEach(t),Ia=p(j),ft=s(j,"A",{href:!0});var Rc=i(ft);La=r(Rc,"ViT"),Rc.forEach(t),Na=r(j,", "),gt=s(j,"A",{href:!0});var Bc=i(gt);Oa=r(Bc,"BEiT"),Bc.forEach(t),Ra=r(j,", "),ut=s(j,"A",{href:!0});var Gc=i(ut);Ba=r(Gc,"DeiT"),Gc.forEach(t),Ga=r(j,", "),_t=s(j,"A",{href:!0});var Wc=i(_t);Wa=r(Wc,"Swin"),Wc.forEach(t),Ha=r(j,`)
and any pretrained language model as the decoder (`),_n=s(j,"EM",{});var Hc=i(_n);Ua=r(Hc,"e.g."),Hc.forEach(t),Za=p(j),vt=s(j,"A",{href:!0});var Uc=i(vt);Ya=r(Uc,"RoBERTa"),Uc.forEach(t),Ja=r(j,", "),bt=s(j,"A",{href:!0});var Zc=i(bt);Ka=r(Zc,"GPT2"),Zc.forEach(t),Qa=r(j,", "),wt=s(j,"A",{href:!0});var Yc=i(wt);Xa=r(Yc,"BERT"),Yc.forEach(t),es=r(j,", "),Et=s(j,"A",{href:!0});var Jc=i(Et);os=r(Jc,"DistilBERT"),Jc.forEach(t),ts=r(j,")."),j.forEach(t),xr=p(o),ke=s(o,"P",{});var ea=i(ke);ns=r(ea,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),no=s(ea,"A",{href:!0,rel:!0});var Kc=i(no);rs=r(Kc,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Kc.forEach(t),as=r(ea,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),ea.forEach(t),$r=p(o),xe=s(o,"P",{});var oa=i(xe);ss=r(oa,"After such a "),Tt=s(oa,"A",{href:!0});var Qc=i(Tt);is=r(Qc,"VisionEncoderDecoderModel"),Qc.forEach(t),ds=r(oa,` has been trained/fine-tuned, it can be saved/loaded just like any other models (see the examples below
for more information).`),oa.forEach(t),jr=p(o),J=s(o,"P",{});var en=i(J);ls=r(en,`An example application is image captioning, in which the encoder is used to encode the image, after which an autoregressive language model generates
the caption. Another example is optical character recognition. Refer to `),yt=s(en,"A",{href:!0});var Xc=i(yt);cs=r(Xc,"TrOCR"),Xc.forEach(t),ps=r(en,", which is an instance of "),kt=s(en,"A",{href:!0});var ep=i(kt);ms=r(ep,"VisionEncoderDecoderModel"),ep.forEach(t),hs=r(en,"."),en.forEach(t),Mr=p(o),re=s(o,"H2",{class:!0});var ta=i(re);$e=s(ta,"A",{id:!0,class:!0,href:!0});var op=i($e);vn=s(op,"SPAN",{});var tp=i(vn);w(ro.$$.fragment,tp),tp.forEach(t),op.forEach(t),fs=p(ta),ao=s(ta,"SPAN",{});var na=i(ao);gs=r(na,"Randomly initializing "),bn=s(na,"CODE",{});var np=i(bn);us=r(np,"VisionEncoderDecoderModel"),np.forEach(t),_s=r(na," from model configurations."),na.forEach(t),ta.forEach(t),Dr=p(o),Z=s(o,"P",{});var it=i(Z);xt=s(it,"A",{href:!0});var rp=i(xt);vs=r(rp,"VisionEncoderDecoderModel"),rp.forEach(t),bs=r(it," can be randomly initialized from an encoder and a decoder config. In the following example, we show how to do this using the default "),$t=s(it,"A",{href:!0});var ap=i($t);ws=r(ap,"ViTModel"),ap.forEach(t),Es=r(it,` configuration for the encoder
and the default `),wn=s(it,"CODE",{});var sp=i(wn);Ts=r(sp,"BertForCausalLM"),sp.forEach(t),ys=r(it," configuration for the decoder."),it.forEach(t),Vr=p(o),w(so.$$.fragment,o),qr=p(o),ae=s(o,"H2",{class:!0});var ra=i(ae);je=s(ra,"A",{id:!0,class:!0,href:!0});var ip=i(je);En=s(ip,"SPAN",{});var dp=i(En);w(io.$$.fragment,dp),dp.forEach(t),ip.forEach(t),ks=p(ra),lo=s(ra,"SPAN",{});var aa=i(lo);xs=r(aa,"Initialising "),Tn=s(aa,"CODE",{});var lp=i(Tn);$s=r(lp,"VisionEncoderDecoderModel"),lp.forEach(t),js=r(aa," from a pretrained encoder and a pretrained decoder."),aa.forEach(t),ra.forEach(t),zr=p(o),M=s(o,"P",{});var P=i(M);jt=s(P,"A",{href:!0});var cp=i(jt);Ms=r(cp,"VisionEncoderDecoderModel"),cp.forEach(t),Ds=r(P," can be initialized from a pretrained encoder checkpoint and a pretrained decoder checkpoint. Note that any pretrained Transformer-based vision model, "),yn=s(P,"EM",{});var pp=i(yn);Vs=r(pp,"e.g."),pp.forEach(t),qs=p(P),Mt=s(P,"A",{href:!0});var mp=i(Mt);zs=r(mp,"Swin"),mp.forEach(t),Ps=r(P,", can serve as the encoder and both pretrained auto-encoding models, "),kn=s(P,"EM",{});var hp=i(kn);Fs=r(hp,"e.g."),hp.forEach(t),As=r(P," BERT, pretrained causal language models, "),xn=s(P,"EM",{});var fp=i(xn);Cs=r(fp,"e.g."),fp.forEach(t),Ss=r(P," GPT2, as well as the pretrained decoder part of sequence-to-sequence models, "),$n=s(P,"EM",{});var gp=i($n);Is=r(gp,"e.g."),gp.forEach(t),Ls=r(P,` decoder of BART, can be used as the decoder.
Depending on which architecture you choose as the decoder, the cross-attention layers might be randomly initialized.
Initializing `),Dt=s(P,"A",{href:!0});var up=i(Dt);Ns=r(up,"VisionEncoderDecoderModel"),up.forEach(t),Os=r(P," from a pretrained encoder and decoder checkpoint requires the model to be fine-tuned on a downstream task, as has been shown in "),Me=s(P,"A",{href:!0,rel:!0});var Lc=i(Me);Rs=r(Lc,"the "),jn=s(Lc,"EM",{});var _p=i(jn);Bs=r(_p,"Warm-starting-encoder-decoder blog post"),_p.forEach(t),Lc.forEach(t),Gs=r(P,`.
To do so, the `),Mn=s(P,"CODE",{});var vp=i(Mn);Ws=r(vp,"VisionEncoderDecoderModel"),vp.forEach(t),Hs=r(P," class provides a "),Vt=s(P,"A",{href:!0});var bp=i(Vt);Us=r(bp,"VisionEncoderDecoderModel.from_encoder_decoder_pretrained()"),bp.forEach(t),Zs=r(P," method."),P.forEach(t),Pr=p(o),w(co.$$.fragment,o),Fr=p(o),se=s(o,"H2",{class:!0});var sa=i(se);De=s(sa,"A",{id:!0,class:!0,href:!0});var wp=i(De);Dn=s(wp,"SPAN",{});var Ep=i(Dn);w(po.$$.fragment,Ep),Ep.forEach(t),wp.forEach(t),Ys=p(sa),mo=s(sa,"SPAN",{});var ia=i(mo);Js=r(ia,"Loading an existing "),Vn=s(ia,"CODE",{});var Tp=i(Vn);Ks=r(Tp,"VisionEncoderDecoderModel"),Tp.forEach(t),Qs=r(ia," checkpoint and perform inference."),ia.forEach(t),sa.forEach(t),Ar=p(o),L=s(o,"P",{});var Je=i(L);Xs=r(Je,"To load fine-tuned checkpoints of the "),qn=s(Je,"CODE",{});var yp=i(qn);ei=r(yp,"VisionEncoderDecoderModel"),yp.forEach(t),oi=r(Je," class, "),qt=s(Je,"A",{href:!0});var kp=i(qt);ti=r(kp,"VisionEncoderDecoderModel"),kp.forEach(t),ni=r(Je," provides the "),zn=s(Je,"CODE",{});var xp=i(zn);ri=r(xp,"from_pretrained(...)"),xp.forEach(t),ai=r(Je," method just like any other model architecture in Transformers."),Je.forEach(t),Cr=p(o),Ve=s(o,"P",{});var da=i(Ve);si=r(da,"To perform inference, one uses the "),Pn=s(da,"CODE",{});var $p=i(Pn);ii=r($p,"generate"),$p.forEach(t),di=r(da," method, which allows to autoregressively generate text. This method supports various forms of decoding, such as greedy, beam search and multinomial sampling."),da.forEach(t),Sr=p(o),w(ho.$$.fragment,o),Ir=p(o),ie=s(o,"H2",{class:!0});var la=i(ie);qe=s(la,"A",{id:!0,class:!0,href:!0});var jp=i(qe);Fn=s(jp,"SPAN",{});var Mp=i(Fn);w(fo.$$.fragment,Mp),Mp.forEach(t),jp.forEach(t),li=p(la),go=s(la,"SPAN",{});var ca=i(go);ci=r(ca,"Loading a PyTorch checkpoint into "),An=s(ca,"CODE",{});var Dp=i(An);pi=r(Dp,"TFVisionEncoderDecoderModel"),Dp.forEach(t),mi=r(ca,"."),ca.forEach(t),la.forEach(t),Lr=p(o),de=s(o,"P",{});var Er=i(de);Cn=s(Er,"CODE",{});var Vp=i(Cn);hi=r(Vp,"TFVisionEncoderDecoderModel.from_pretrained()"),Vp.forEach(t),fi=r(Er,` currently doesn\u2019t support initializing the model from a
PyTorch checkpoint. Passing `),Sn=s(Er,"CODE",{});var qp=i(Sn);gi=r(qp,"from_pt=True"),qp.forEach(t),ui=r(Er,` to this method will throw an exception. If there are only PyTorch
checkpoints for a particular vision encoder-decoder model, a workaround is:`),Er.forEach(t),Nr=p(o),w(uo.$$.fragment,o),Or=p(o),le=s(o,"H2",{class:!0});var pa=i(le);ze=s(pa,"A",{id:!0,class:!0,href:!0});var zp=i(ze);In=s(zp,"SPAN",{});var Pp=i(In);w(_o.$$.fragment,Pp),Pp.forEach(t),zp.forEach(t),_i=p(pa),Ln=s(pa,"SPAN",{});var Fp=i(Ln);vi=r(Fp,"Training"),Fp.forEach(t),pa.forEach(t),Rr=p(o),N=s(o,"P",{});var Ke=i(N);bi=r(Ke,`Once the model is created, it can be fine-tuned similar to BART, T5 or any other encoder-decoder model on a dataset of (image, text) pairs.
As you can see, only 2 inputs are required for the model in order to compute a loss: `),Nn=s(Ke,"CODE",{});var Ap=i(Nn);wi=r(Ap,"pixel_values"),Ap.forEach(t),Ei=r(Ke,` (which are the
images) and `),On=s(Ke,"CODE",{});var Cp=i(On);Ti=r(Cp,"labels"),Cp.forEach(t),yi=r(Ke," (which are the "),Rn=s(Ke,"CODE",{});var Sp=i(Rn);ki=r(Sp,"input_ids"),Sp.forEach(t),xi=r(Ke," of the encoded target sequence)."),Ke.forEach(t),Br=p(o),w(vo.$$.fragment,o),Gr=p(o),K=s(o,"P",{});var on=i(K);$i=r(on,"This model was contributed by "),bo=s(on,"A",{href:!0,rel:!0});var Ip=i(bo);ji=r(Ip,"nielsr"),Ip.forEach(t),Mi=r(on,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),wo=s(on,"A",{href:!0,rel:!0});var Lp=i(wo);Di=r(Lp,"ydshieh"),Lp.forEach(t),Vi=r(on,"."),on.forEach(t),Wr=p(o),ce=s(o,"H2",{class:!0});var ma=i(ce);Pe=s(ma,"A",{id:!0,class:!0,href:!0});var Np=i(Pe);Bn=s(Np,"SPAN",{});var Op=i(Bn);w(Eo.$$.fragment,Op),Op.forEach(t),Np.forEach(t),qi=p(ma),Gn=s(ma,"SPAN",{});var Rp=i(Gn);zi=r(Rp,"VisionEncoderDecoderConfig"),Rp.forEach(t),ma.forEach(t),Hr=p(o),S=s(o,"DIV",{class:!0});var W=i(S);w(To.$$.fragment,W),Pi=p(W),Fe=s(W,"P",{});var Tr=i(Fe);zt=s(Tr,"A",{href:!0});var Bp=i(zt);Fi=r(Bp,"VisionEncoderDecoderConfig"),Bp.forEach(t),Ai=r(Tr,` is the configuration class to store the configuration of a
`),Pt=s(Tr,"A",{href:!0});var Gp=i(Pt);Ci=r(Gp,"VisionEncoderDecoderModel"),Gp.forEach(t),Si=r(Tr,`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Tr.forEach(t),Ii=p(W),pe=s(W,"P",{});var tn=i(pe);Li=r(tn,"Configuration objects inherit from "),Ft=s(tn,"A",{href:!0});var Wp=i(Ft);Ni=r(Wp,"PretrainedConfig"),Wp.forEach(t),Oi=r(tn,` and can be used to control the model outputs. Read the
documentation from `),At=s(tn,"A",{href:!0});var Hp=i(At);Ri=r(Hp,"PretrainedConfig"),Hp.forEach(t),Bi=r(tn," for more information."),tn.forEach(t),Gi=p(W),w(Ae.$$.fragment,W),Wi=p(W),Ce=s(W,"DIV",{class:!0});var ha=i(Ce);w(yo.$$.fragment,ha),Hi=p(ha),ko=s(ha,"P",{});var fa=i(ko);Ui=r(fa,"Instantiate a "),Ct=s(fa,"A",{href:!0});var Up=i(Ct);Zi=r(Up,"VisionEncoderDecoderConfig"),Up.forEach(t),Yi=r(fa,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),fa.forEach(t),ha.forEach(t),Ji=p(W),Se=s(W,"DIV",{class:!0});var ga=i(Se);w(xo.$$.fragment,ga),Ki=p(ga),me=s(ga,"P",{});var nn=i(me);Qi=r(nn,"Serializes this instance to a Python dictionary. Override the default "),Wn=s(nn,"EM",{});var Zp=i(Wn);Xi=r(Zp,"to_dict()"),Zp.forEach(t),ed=r(nn," from "),Hn=s(nn,"EM",{});var Yp=i(Hn);od=r(Yp,"PretrainedConfig"),Yp.forEach(t),td=r(nn,"."),nn.forEach(t),ga.forEach(t),W.forEach(t),Ur=p(o),he=s(o,"H2",{class:!0});var ua=i(he);Ie=s(ua,"A",{id:!0,class:!0,href:!0});var Jp=i(Ie);Un=s(Jp,"SPAN",{});var Kp=i(Un);w($o.$$.fragment,Kp),Kp.forEach(t),Jp.forEach(t),nd=p(ua),Zn=s(ua,"SPAN",{});var Qp=i(Zn);rd=r(Qp,"VisionEncoderDecoderModel"),Qp.forEach(t),ua.forEach(t),Zr=p(o),D=s(o,"DIV",{class:!0});var F=i(D);w(jo.$$.fragment,F),ad=p(F),fe=s(F,"P",{});var rn=i(fe);sd=r(rn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),St=s(rn,"A",{href:!0});var Xp=i(St);id=r(Xp,"from_pretrained()"),Xp.forEach(t),dd=r(rn," function and the decoder is loaded via "),It=s(rn,"A",{href:!0});var em=i(It);ld=r(em,"from_pretrained()"),em.forEach(t),cd=r(rn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),rn.forEach(t),pd=p(F),Mo=s(F,"P",{});var _a=i(Mo);md=r(_a,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Do=s(_a,"A",{href:!0,rel:!0});var om=i(Do);hd=r(om,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),om.forEach(t),fd=r(_a,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),_a.forEach(t),gd=p(F),Vo=s(F,"P",{});var va=i(Vo);ud=r(va,"Additionally, in "),qo=s(va,"A",{href:!0,rel:!0});var tm=i(qo);_d=r(tm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),tm.forEach(t),vd=r(va,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),va.forEach(t),bd=p(F),Yn=s(F,"P",{});var nm=i(Yn);wd=r(nm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),nm.forEach(t),Ed=p(F),zo=s(F,"P",{});var ba=i(zo);Td=r(ba,"This model inherits from "),Lt=s(ba,"A",{href:!0});var rm=i(Lt);yd=r(rm,"PreTrainedModel"),rm.forEach(t),kd=r(ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba.forEach(t),xd=p(F),Po=s(F,"P",{});var wa=i(Po);$d=r(wa,"This model is also a PyTorch "),Fo=s(wa,"A",{href:!0,rel:!0});var am=i(Fo);jd=r(am,"torch.nn.Module"),am.forEach(t),Md=r(wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wa.forEach(t),Dd=p(F),Q=s(F,"P",{});var dt=i(Q);Nt=s(dt,"A",{href:!0});var sm=i(Nt);Vd=r(sm,"VisionEncoderDecoderModel"),sm.forEach(t),qd=r(dt,` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Jn=s(dt,"EM",{});var im=i(Jn);zd=r(im,"~transformers.AutoModel.from_pretrained"),im.forEach(t),Pd=r(dt,` class method for the encoder and
:meth`),Kn=s(dt,"EM",{});var dm=i(Kn);Fd=r(dm,"~transformers.AutoModelForCausalLM.from_pretrained"),dm.forEach(t),Ad=r(dt," class method for the decoder."),dt.forEach(t),Cd=p(F),O=s(F,"DIV",{class:!0});var Qe=i(O);w(Ao.$$.fragment,Qe),Sd=p(Qe),ge=s(Qe,"P",{});var an=i(ge);Id=r(an,"The "),Ot=s(an,"A",{href:!0});var lm=i(Ot);Ld=r(lm,"VisionEncoderDecoderModel"),lm.forEach(t),Nd=r(an," forward method, overrides the "),Qn=s(an,"CODE",{});var cm=i(Qn);Od=r(cm,"__call__"),cm.forEach(t),Rd=r(an," special method."),an.forEach(t),Bd=p(Qe),w(Le.$$.fragment,Qe),Gd=p(Qe),w(Ne.$$.fragment,Qe),Qe.forEach(t),Wd=p(F),R=s(F,"DIV",{class:!0});var Xe=i(R);w(Co.$$.fragment,Xe),Hd=p(Xe),Xn=s(Xe,"P",{});var pm=i(Xn);Ud=r(pm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pm.forEach(t),Zd=p(Xe),ue=s(Xe,"P",{});var sn=i(ue);Yd=r(sn,"The model is set in evaluation mode by default using "),er=s(sn,"CODE",{});var mm=i(er);Jd=r(mm,"model.eval()"),mm.forEach(t),Kd=r(sn,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),or=s(sn,"CODE",{});var hm=i(or);Qd=r(hm,"model.train()"),hm.forEach(t),Xd=r(sn,"."),sn.forEach(t),el=p(Xe),w(Oe.$$.fragment,Xe),Xe.forEach(t),F.forEach(t),Yr=p(o),_e=s(o,"H2",{class:!0});var Ea=i(_e);Re=s(Ea,"A",{id:!0,class:!0,href:!0});var fm=i(Re);tr=s(fm,"SPAN",{});var gm=i(tr);w(So.$$.fragment,gm),gm.forEach(t),fm.forEach(t),ol=p(Ea),nr=s(Ea,"SPAN",{});var um=i(nr);tl=r(um,"TFVisionEncoderDecoderModel"),um.forEach(t),Ea.forEach(t),Jr=p(o),V=s(o,"DIV",{class:!0});var A=i(V);w(Io.$$.fragment,A),nl=p(A),ve=s(A,"P",{});var dn=i(ve);rl=r(dn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Rt=s(dn,"A",{href:!0});var _m=i(Rt);al=r(_m,"from_pretrained()"),_m.forEach(t),sl=r(dn," function and the decoder is loaded via "),Bt=s(dn,"A",{href:!0});var vm=i(Bt);il=r(vm,"from_pretrained()"),vm.forEach(t),dl=r(dn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),dn.forEach(t),ll=p(A),Lo=s(A,"P",{});var Ta=i(Lo);cl=r(Ta,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),No=s(Ta,"A",{href:!0,rel:!0});var bm=i(No);pl=r(bm,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),bm.forEach(t),ml=r(Ta,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ta.forEach(t),hl=p(A),Oo=s(A,"P",{});var ya=i(Oo);fl=r(ya,"Additionally, in "),Ro=s(ya,"A",{href:!0,rel:!0});var wm=i(Ro);gl=r(wm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),wm.forEach(t),ul=r(ya,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),ya.forEach(t),_l=p(A),rr=s(A,"P",{});var Em=i(rr);vl=r(Em,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Em.forEach(t),bl=p(A),Bo=s(A,"P",{});var ka=i(Bo);wl=r(ka,"This model inherits from "),Gt=s(ka,"A",{href:!0});var Tm=i(Gt);El=r(Tm,"TFPreTrainedModel"),Tm.forEach(t),Tl=r(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(t),yl=p(A),Go=s(A,"P",{});var xa=i(Go);kl=r(xa,"This model is also a "),Wo=s(xa,"A",{href:!0,rel:!0});var ym=i(Wo);xl=r(ym,"tf.keras.Model"),ym.forEach(t),$l=r(xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xa.forEach(t),jl=p(A),X=s(A,"P",{});var lt=i(X);Wt=s(lt,"A",{href:!0});var km=i(Wt);Ml=r(km,"TFVisionEncoderDecoderModel"),km.forEach(t),Dl=r(lt,` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Ht=s(lt,"A",{href:!0});var xm=i(Ht);Vl=r(xm,"from_pretrained()"),xm.forEach(t),ql=r(lt,` class method for the encoder and
`),Ut=s(lt,"A",{href:!0});var $m=i(Ut);zl=r($m,"from_pretrained()"),$m.forEach(t),Pl=r(lt," class method for the decoder."),lt.forEach(t),Fl=p(A),B=s(A,"DIV",{class:!0});var eo=i(B);w(Ho.$$.fragment,eo),Al=p(eo),be=s(eo,"P",{});var ln=i(be);Cl=r(ln,"The "),Zt=s(ln,"A",{href:!0});var jm=i(Zt);Sl=r(jm,"TFVisionEncoderDecoderModel"),jm.forEach(t),Il=r(ln," forward method, overrides the "),ar=s(ln,"CODE",{});var Mm=i(ar);Ll=r(Mm,"__call__"),Mm.forEach(t),Nl=r(ln," special method."),ln.forEach(t),Ol=p(eo),w(Be.$$.fragment,eo),Rl=p(eo),w(Ge.$$.fragment,eo),eo.forEach(t),Bl=p(A),ee=s(A,"DIV",{class:!0});var cn=i(ee);w(Uo.$$.fragment,cn),Gl=p(cn),sr=s(cn,"P",{});var Dm=i(sr);Wl=r(Dm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Dm.forEach(t),Hl=p(cn),w(We.$$.fragment,cn),cn.forEach(t),A.forEach(t),Kr=p(o),we=s(o,"H2",{class:!0});var $a=i(we);He=s($a,"A",{id:!0,class:!0,href:!0});var Vm=i(He);ir=s(Vm,"SPAN",{});var qm=i(ir);w(Zo.$$.fragment,qm),qm.forEach(t),Vm.forEach(t),Ul=p($a),dr=s($a,"SPAN",{});var zm=i(dr);Zl=r(zm,"FlaxVisionEncoderDecoderModel"),zm.forEach(t),$a.forEach(t),Qr=p(o),q=s(o,"DIV",{class:!0});var C=i(q);w(Yo.$$.fragment,C),Yl=p(C),Ee=s(C,"P",{});var pn=i(Ee);Jl=r(pn,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Yt=s(pn,"A",{href:!0});var Pm=i(Yt);Kl=r(Pm,"from_pretrained()"),Pm.forEach(t),Ql=r(pn," function and the decoder is loaded via "),Jt=s(pn,"A",{href:!0});var Fm=i(Jt);Xl=r(Fm,"from_pretrained()"),Fm.forEach(t),ec=r(pn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pn.forEach(t),oc=p(C),Jo=s(C,"P",{});var ja=i(Jo);tc=r(ja,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ko=s(ja,"A",{href:!0,rel:!0});var Am=i(Ko);nc=r(Am,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Am.forEach(t),rc=r(ja,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ja.forEach(t),ac=p(C),Qo=s(C,"P",{});var Ma=i(Qo);sc=r(Ma,"Additionally, in "),Xo=s(Ma,"A",{href:!0,rel:!0});var Cm=i(Xo);ic=r(Cm,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Cm.forEach(t),dc=r(Ma,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Ma.forEach(t),lc=p(C),lr=s(C,"P",{});var Sm=i(lr);cc=r(Sm,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Sm.forEach(t),pc=p(C),et=s(C,"P",{});var Da=i(et);mc=r(Da,"This model inherits from "),Kt=s(Da,"A",{href:!0});var Im=i(Kt);hc=r(Im,"FlaxPreTrainedModel"),Im.forEach(t),fc=r(Da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Da.forEach(t),gc=p(C),ot=s(C,"P",{});var Va=i(ot);uc=r(Va,`This model is also a Flax Linen
`),tt=s(Va,"A",{href:!0,rel:!0});var Lm=i(tt);_c=r(Lm,"flax.nn.Module"),Lm.forEach(t),vc=r(Va,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Va.forEach(t),bc=p(C),oe=s(C,"P",{});var ct=i(oe);Qt=s(ct,"A",{href:!0});var Nm=i(Qt);wc=r(Nm,"FlaxVisionEncoderDecoderModel"),Nm.forEach(t),Ec=r(ct,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),cr=s(ct,"EM",{});var Om=i(cr);Tc=r(Om,"~transformers.FlaxAutoModel.from_pretrained"),Om.forEach(t),yc=r(ct,` class method
for the encoder and :meth`),pr=s(ct,"EM",{});var Rm=i(pr);kc=r(Rm,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rm.forEach(t),xc=r(ct," class method for the decoder."),ct.forEach(t),$c=p(C),G=s(C,"DIV",{class:!0});var oo=i(G);w(nt.$$.fragment,oo),jc=p(oo),Te=s(oo,"P",{});var mn=i(Te);Mc=r(mn,"The "),Xt=s(mn,"A",{href:!0});var Bm=i(Xt);Dc=r(Bm,"FlaxVisionEncoderDecoderModel"),Bm.forEach(t),Vc=r(mn," forward method, overrides the "),mr=s(mn,"CODE",{});var Gm=i(mr);qc=r(Gm,"__call__"),Gm.forEach(t),zc=r(mn," special method."),mn.forEach(t),Pc=p(oo),w(Ue.$$.fragment,oo),Fc=p(oo),w(Ze.$$.fragment,oo),oo.forEach(t),Ac=p(C),te=s(C,"DIV",{class:!0});var hn=i(te);w(rt.$$.fragment,hn),Cc=p(hn),hr=s(hn,"P",{});var Wm=i(hr);Sc=r(Wm,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Wm.forEach(t),Ic=p(hn),w(Ye.$$.fragment,hn),hn.forEach(t),C.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(dh)),l(f,"id","vision-encoder-decoder-models"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#vision-encoder-decoder-models"),l(_,"class","relative group"),l(ye,"id","overview"),l(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ye,"href","#overview"),l(ne,"class","relative group"),l(ht,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(ft,"href","vit"),l(gt,"href","beit"),l(ut,"href","deit"),l(_t,"href","swin"),l(vt,"href","roberta"),l(bt,"href","gpt2"),l(wt,"href","bert"),l(Et,"href","distilbert"),l(no,"href","https://arxiv.org/abs/2109.10282"),l(no,"rel","nofollow"),l(Tt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(yt,"href","trocr"),l(kt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l($e,"id","randomly-initializing-visionencoderdecodermodel-from-model-configurations"),l($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($e,"href","#randomly-initializing-visionencoderdecodermodel-from-model-configurations"),l(re,"class","relative group"),l(xt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l($t,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),l(je,"id","initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),l(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(je,"href","#initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder"),l(ae,"class","relative group"),l(jt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(Mt,"href","swin"),l(Dt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(Me,"href","https://huggingface.co/blog/warm-starting-encoder-decoder"),l(Me,"rel","nofollow"),l(Vt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained"),l(De,"id","loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),l(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(De,"href","#loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference"),l(se,"class","relative group"),l(qt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(qe,"id","loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),l(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(qe,"href","#loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel"),l(ie,"class","relative group"),l(ze,"id","training"),l(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ze,"href","#training"),l(le,"class","relative group"),l(bo,"href","https://github.com/nielsrogge"),l(bo,"rel","nofollow"),l(wo,"href","https://github.com/ydshieh"),l(wo,"rel","nofollow"),l(Pe,"id","transformers.VisionEncoderDecoderConfig"),l(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Pe,"href","#transformers.VisionEncoderDecoderConfig"),l(ce,"class","relative group"),l(zt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),l(Pt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(Ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(At,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ct,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),l(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ie,"id","transformers.VisionEncoderDecoderModel"),l(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ie,"href","#transformers.VisionEncoderDecoderModel"),l(he,"class","relative group"),l(St,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(It,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Do,"href","https://arxiv.org/abs/1907.12461"),l(Do,"rel","nofollow"),l(qo,"href","https://arxiv.org/abs/2109.10282"),l(qo,"rel","nofollow"),l(Lt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Fo,"rel","nofollow"),l(Nt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(Ot,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Re,"id","transformers.TFVisionEncoderDecoderModel"),l(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Re,"href","#transformers.TFVisionEncoderDecoderModel"),l(_e,"class","relative group"),l(Rt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Bt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(No,"href","https://arxiv.org/abs/1907.12461"),l(No,"rel","nofollow"),l(Ro,"href","https://arxiv.org/abs/2109.10282"),l(Ro,"rel","nofollow"),l(Gt,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(Wo,"rel","nofollow"),l(Wt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),l(Ht,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Zt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(He,"id","transformers.FlaxVisionEncoderDecoderModel"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.FlaxVisionEncoderDecoderModel"),l(we,"class","relative group"),l(Yt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Jt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ko,"href","https://arxiv.org/abs/1907.12461"),l(Ko,"rel","nofollow"),l(Xo,"href","https://arxiv.org/abs/2109.10282"),l(Xo,"rel","nofollow"),l(Kt,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(tt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(tt,"rel","nofollow"),l(Qt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),l(Xt,"href","/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,h),g(o,x,m),g(o,_,m),e(_,f),e(f,v),E(d,v,null),e(_,u),e(_,I),e(I,qa),g(o,yr,m),g(o,ne,m),e(ne,ye),e(ye,fn),E(to,fn,null),e(ne,za),e(ne,gn),e(gn,Pa),g(o,kr,m),g(o,$,m),e($,Fa),e($,ht),e(ht,Aa),e($,Ca),e($,un),e(un,Sa),e($,Ia),e($,ft),e(ft,La),e($,Na),e($,gt),e(gt,Oa),e($,Ra),e($,ut),e(ut,Ba),e($,Ga),e($,_t),e(_t,Wa),e($,Ha),e($,_n),e(_n,Ua),e($,Za),e($,vt),e(vt,Ya),e($,Ja),e($,bt),e(bt,Ka),e($,Qa),e($,wt),e(wt,Xa),e($,es),e($,Et),e(Et,os),e($,ts),g(o,xr,m),g(o,ke,m),e(ke,ns),e(ke,no),e(no,rs),e(ke,as),g(o,$r,m),g(o,xe,m),e(xe,ss),e(xe,Tt),e(Tt,is),e(xe,ds),g(o,jr,m),g(o,J,m),e(J,ls),e(J,yt),e(yt,cs),e(J,ps),e(J,kt),e(kt,ms),e(J,hs),g(o,Mr,m),g(o,re,m),e(re,$e),e($e,vn),E(ro,vn,null),e(re,fs),e(re,ao),e(ao,gs),e(ao,bn),e(bn,us),e(ao,_s),g(o,Dr,m),g(o,Z,m),e(Z,xt),e(xt,vs),e(Z,bs),e(Z,$t),e($t,ws),e(Z,Es),e(Z,wn),e(wn,Ts),e(Z,ys),g(o,Vr,m),E(so,o,m),g(o,qr,m),g(o,ae,m),e(ae,je),e(je,En),E(io,En,null),e(ae,ks),e(ae,lo),e(lo,xs),e(lo,Tn),e(Tn,$s),e(lo,js),g(o,zr,m),g(o,M,m),e(M,jt),e(jt,Ms),e(M,Ds),e(M,yn),e(yn,Vs),e(M,qs),e(M,Mt),e(Mt,zs),e(M,Ps),e(M,kn),e(kn,Fs),e(M,As),e(M,xn),e(xn,Cs),e(M,Ss),e(M,$n),e($n,Is),e(M,Ls),e(M,Dt),e(Dt,Ns),e(M,Os),e(M,Me),e(Me,Rs),e(Me,jn),e(jn,Bs),e(M,Gs),e(M,Mn),e(Mn,Ws),e(M,Hs),e(M,Vt),e(Vt,Us),e(M,Zs),g(o,Pr,m),E(co,o,m),g(o,Fr,m),g(o,se,m),e(se,De),e(De,Dn),E(po,Dn,null),e(se,Ys),e(se,mo),e(mo,Js),e(mo,Vn),e(Vn,Ks),e(mo,Qs),g(o,Ar,m),g(o,L,m),e(L,Xs),e(L,qn),e(qn,ei),e(L,oi),e(L,qt),e(qt,ti),e(L,ni),e(L,zn),e(zn,ri),e(L,ai),g(o,Cr,m),g(o,Ve,m),e(Ve,si),e(Ve,Pn),e(Pn,ii),e(Ve,di),g(o,Sr,m),E(ho,o,m),g(o,Ir,m),g(o,ie,m),e(ie,qe),e(qe,Fn),E(fo,Fn,null),e(ie,li),e(ie,go),e(go,ci),e(go,An),e(An,pi),e(go,mi),g(o,Lr,m),g(o,de,m),e(de,Cn),e(Cn,hi),e(de,fi),e(de,Sn),e(Sn,gi),e(de,ui),g(o,Nr,m),E(uo,o,m),g(o,Or,m),g(o,le,m),e(le,ze),e(ze,In),E(_o,In,null),e(le,_i),e(le,Ln),e(Ln,vi),g(o,Rr,m),g(o,N,m),e(N,bi),e(N,Nn),e(Nn,wi),e(N,Ei),e(N,On),e(On,Ti),e(N,yi),e(N,Rn),e(Rn,ki),e(N,xi),g(o,Br,m),E(vo,o,m),g(o,Gr,m),g(o,K,m),e(K,$i),e(K,bo),e(bo,ji),e(K,Mi),e(K,wo),e(wo,Di),e(K,Vi),g(o,Wr,m),g(o,ce,m),e(ce,Pe),e(Pe,Bn),E(Eo,Bn,null),e(ce,qi),e(ce,Gn),e(Gn,zi),g(o,Hr,m),g(o,S,m),E(To,S,null),e(S,Pi),e(S,Fe),e(Fe,zt),e(zt,Fi),e(Fe,Ai),e(Fe,Pt),e(Pt,Ci),e(Fe,Si),e(S,Ii),e(S,pe),e(pe,Li),e(pe,Ft),e(Ft,Ni),e(pe,Oi),e(pe,At),e(At,Ri),e(pe,Bi),e(S,Gi),E(Ae,S,null),e(S,Wi),e(S,Ce),E(yo,Ce,null),e(Ce,Hi),e(Ce,ko),e(ko,Ui),e(ko,Ct),e(Ct,Zi),e(ko,Yi),e(S,Ji),e(S,Se),E(xo,Se,null),e(Se,Ki),e(Se,me),e(me,Qi),e(me,Wn),e(Wn,Xi),e(me,ed),e(me,Hn),e(Hn,od),e(me,td),g(o,Ur,m),g(o,he,m),e(he,Ie),e(Ie,Un),E($o,Un,null),e(he,nd),e(he,Zn),e(Zn,rd),g(o,Zr,m),g(o,D,m),E(jo,D,null),e(D,ad),e(D,fe),e(fe,sd),e(fe,St),e(St,id),e(fe,dd),e(fe,It),e(It,ld),e(fe,cd),e(D,pd),e(D,Mo),e(Mo,md),e(Mo,Do),e(Do,hd),e(Mo,fd),e(D,gd),e(D,Vo),e(Vo,ud),e(Vo,qo),e(qo,_d),e(Vo,vd),e(D,bd),e(D,Yn),e(Yn,wd),e(D,Ed),e(D,zo),e(zo,Td),e(zo,Lt),e(Lt,yd),e(zo,kd),e(D,xd),e(D,Po),e(Po,$d),e(Po,Fo),e(Fo,jd),e(Po,Md),e(D,Dd),e(D,Q),e(Q,Nt),e(Nt,Vd),e(Q,qd),e(Q,Jn),e(Jn,zd),e(Q,Pd),e(Q,Kn),e(Kn,Fd),e(Q,Ad),e(D,Cd),e(D,O),E(Ao,O,null),e(O,Sd),e(O,ge),e(ge,Id),e(ge,Ot),e(Ot,Ld),e(ge,Nd),e(ge,Qn),e(Qn,Od),e(ge,Rd),e(O,Bd),E(Le,O,null),e(O,Gd),E(Ne,O,null),e(D,Wd),e(D,R),E(Co,R,null),e(R,Hd),e(R,Xn),e(Xn,Ud),e(R,Zd),e(R,ue),e(ue,Yd),e(ue,er),e(er,Jd),e(ue,Kd),e(ue,or),e(or,Qd),e(ue,Xd),e(R,el),E(Oe,R,null),g(o,Yr,m),g(o,_e,m),e(_e,Re),e(Re,tr),E(So,tr,null),e(_e,ol),e(_e,nr),e(nr,tl),g(o,Jr,m),g(o,V,m),E(Io,V,null),e(V,nl),e(V,ve),e(ve,rl),e(ve,Rt),e(Rt,al),e(ve,sl),e(ve,Bt),e(Bt,il),e(ve,dl),e(V,ll),e(V,Lo),e(Lo,cl),e(Lo,No),e(No,pl),e(Lo,ml),e(V,hl),e(V,Oo),e(Oo,fl),e(Oo,Ro),e(Ro,gl),e(Oo,ul),e(V,_l),e(V,rr),e(rr,vl),e(V,bl),e(V,Bo),e(Bo,wl),e(Bo,Gt),e(Gt,El),e(Bo,Tl),e(V,yl),e(V,Go),e(Go,kl),e(Go,Wo),e(Wo,xl),e(Go,$l),e(V,jl),e(V,X),e(X,Wt),e(Wt,Ml),e(X,Dl),e(X,Ht),e(Ht,Vl),e(X,ql),e(X,Ut),e(Ut,zl),e(X,Pl),e(V,Fl),e(V,B),E(Ho,B,null),e(B,Al),e(B,be),e(be,Cl),e(be,Zt),e(Zt,Sl),e(be,Il),e(be,ar),e(ar,Ll),e(be,Nl),e(B,Ol),E(Be,B,null),e(B,Rl),E(Ge,B,null),e(V,Bl),e(V,ee),E(Uo,ee,null),e(ee,Gl),e(ee,sr),e(sr,Wl),e(ee,Hl),E(We,ee,null),g(o,Kr,m),g(o,we,m),e(we,He),e(He,ir),E(Zo,ir,null),e(we,Ul),e(we,dr),e(dr,Zl),g(o,Qr,m),g(o,q,m),E(Yo,q,null),e(q,Yl),e(q,Ee),e(Ee,Jl),e(Ee,Yt),e(Yt,Kl),e(Ee,Ql),e(Ee,Jt),e(Jt,Xl),e(Ee,ec),e(q,oc),e(q,Jo),e(Jo,tc),e(Jo,Ko),e(Ko,nc),e(Jo,rc),e(q,ac),e(q,Qo),e(Qo,sc),e(Qo,Xo),e(Xo,ic),e(Qo,dc),e(q,lc),e(q,lr),e(lr,cc),e(q,pc),e(q,et),e(et,mc),e(et,Kt),e(Kt,hc),e(et,fc),e(q,gc),e(q,ot),e(ot,uc),e(ot,tt),e(tt,_c),e(ot,vc),e(q,bc),e(q,oe),e(oe,Qt),e(Qt,wc),e(oe,Ec),e(oe,cr),e(cr,Tc),e(oe,yc),e(oe,pr),e(pr,kc),e(oe,xc),e(q,$c),e(q,G),E(nt,G,null),e(G,jc),e(G,Te),e(Te,Mc),e(Te,Xt),e(Xt,Dc),e(Te,Vc),e(Te,mr),e(mr,qc),e(Te,zc),e(G,Pc),E(Ue,G,null),e(G,Fc),E(Ze,G,null),e(q,Ac),e(q,te),E(rt,te,null),e(te,Cc),e(te,hr),e(hr,Sc),e(te,Ic),E(Ye,te,null),Xr=!0},p(o,[m]){const at={};m&2&&(at.$$scope={dirty:m,ctx:o}),Ae.$set(at);const fr={};m&2&&(fr.$$scope={dirty:m,ctx:o}),Le.$set(fr);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:o}),Ne.$set(gr);const ur={};m&2&&(ur.$$scope={dirty:m,ctx:o}),Oe.$set(ur);const st={};m&2&&(st.$$scope={dirty:m,ctx:o}),Be.$set(st);const _r={};m&2&&(_r.$$scope={dirty:m,ctx:o}),Ge.$set(_r);const vr={};m&2&&(vr.$$scope={dirty:m,ctx:o}),We.$set(vr);const br={};m&2&&(br.$$scope={dirty:m,ctx:o}),Ue.$set(br);const j={};m&2&&(j.$$scope={dirty:m,ctx:o}),Ze.$set(j);const wr={};m&2&&(wr.$$scope={dirty:m,ctx:o}),Ye.$set(wr)},i(o){Xr||(T(d.$$.fragment,o),T(to.$$.fragment,o),T(ro.$$.fragment,o),T(so.$$.fragment,o),T(io.$$.fragment,o),T(co.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(_o.$$.fragment,o),T(vo.$$.fragment,o),T(Eo.$$.fragment,o),T(To.$$.fragment,o),T(Ae.$$.fragment,o),T(yo.$$.fragment,o),T(xo.$$.fragment,o),T($o.$$.fragment,o),T(jo.$$.fragment,o),T(Ao.$$.fragment,o),T(Le.$$.fragment,o),T(Ne.$$.fragment,o),T(Co.$$.fragment,o),T(Oe.$$.fragment,o),T(So.$$.fragment,o),T(Io.$$.fragment,o),T(Ho.$$.fragment,o),T(Be.$$.fragment,o),T(Ge.$$.fragment,o),T(Uo.$$.fragment,o),T(We.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(nt.$$.fragment,o),T(Ue.$$.fragment,o),T(Ze.$$.fragment,o),T(rt.$$.fragment,o),T(Ye.$$.fragment,o),Xr=!0)},o(o){y(d.$$.fragment,o),y(to.$$.fragment,o),y(ro.$$.fragment,o),y(so.$$.fragment,o),y(io.$$.fragment,o),y(co.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(Eo.$$.fragment,o),y(To.$$.fragment,o),y(Ae.$$.fragment,o),y(yo.$$.fragment,o),y(xo.$$.fragment,o),y($o.$$.fragment,o),y(jo.$$.fragment,o),y(Ao.$$.fragment,o),y(Le.$$.fragment,o),y(Ne.$$.fragment,o),y(Co.$$.fragment,o),y(Oe.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ho.$$.fragment,o),y(Be.$$.fragment,o),y(Ge.$$.fragment,o),y(Uo.$$.fragment,o),y(We.$$.fragment,o),y(Zo.$$.fragment,o),y(Yo.$$.fragment,o),y(nt.$$.fragment,o),y(Ue.$$.fragment,o),y(Ze.$$.fragment,o),y(rt.$$.fragment,o),y(Ye.$$.fragment,o),Xr=!1},d(o){t(h),o&&t(x),o&&t(_),k(d),o&&t(yr),o&&t(ne),k(to),o&&t(kr),o&&t($),o&&t(xr),o&&t(ke),o&&t($r),o&&t(xe),o&&t(jr),o&&t(J),o&&t(Mr),o&&t(re),k(ro),o&&t(Dr),o&&t(Z),o&&t(Vr),k(so,o),o&&t(qr),o&&t(ae),k(io),o&&t(zr),o&&t(M),o&&t(Pr),k(co,o),o&&t(Fr),o&&t(se),k(po),o&&t(Ar),o&&t(L),o&&t(Cr),o&&t(Ve),o&&t(Sr),k(ho,o),o&&t(Ir),o&&t(ie),k(fo),o&&t(Lr),o&&t(de),o&&t(Nr),k(uo,o),o&&t(Or),o&&t(le),k(_o),o&&t(Rr),o&&t(N),o&&t(Br),k(vo,o),o&&t(Gr),o&&t(K),o&&t(Wr),o&&t(ce),k(Eo),o&&t(Hr),o&&t(S),k(To),k(Ae),k(yo),k(xo),o&&t(Ur),o&&t(he),k($o),o&&t(Zr),o&&t(D),k(jo),k(Ao),k(Le),k(Ne),k(Co),k(Oe),o&&t(Yr),o&&t(_e),k(So),o&&t(Jr),o&&t(V),k(Io),k(Ho),k(Be),k(Ge),k(Uo),k(We),o&&t(Kr),o&&t(we),k(Zo),o&&t(Qr),o&&t(q),k(Yo),k(nt),k(Ue),k(Ze),k(rt),k(Ye)}}}const dh={local:"vision-encoder-decoder-models",sections:[{local:"overview",title:"Overview"},{local:"randomly-initializing-visionencoderdecodermodel-from-model-configurations",title:"Randomly initializing `VisionEncoderDecoderModel` from model configurations."},{local:"initialising-visionencoderdecodermodel-from-a-pretrained-encoder-and-a-pretrained-decoder",title:"Initialising `VisionEncoderDecoderModel` from a pretrained encoder and a pretrained decoder."},{local:"loading-an-existing-visionencoderdecodermodel-checkpoint-and-perform-inference",title:"Loading an existing `VisionEncoderDecoderModel` checkpoint and perform inference."},{local:"loading-a-pytorch-checkpoint-into-tfvisionencoderdecodermodel",title:"Loading a PyTorch checkpoint into `TFVisionEncoderDecoderModel`."},{local:"training",title:"Training"},{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.TFVisionEncoderDecoderModel",title:"TFVisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function lh(z){return Jm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class uh extends Hm{constructor(h){super();Um(this,h,lh,ih,Zm,{})}}export{uh as default,dh as metadata};
