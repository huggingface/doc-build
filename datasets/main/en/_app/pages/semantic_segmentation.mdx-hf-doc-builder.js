import{S as tt,i as nt,s as lt,e as l,k as m,w as g,t as i,M as ot,c as o,d as a,m as c,a as p,x as h,h as r,b as f,N as As,G as e,g as n,y as u,L as it,q as d,o as _,B as j,v as rt}from"../chunks/vendor-hf-doc-builder.js";import{I as pt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../chunks/CodeBlock-hf-doc-builder.js";function mt(be){let $,Ds,w,E,hs,D,ya,us,ba,Ss,ss,ka,Ls,v,xa,ds,$a,wa,_s,Ea,qa,Rs,S,Bs,L,R,za,Pa,Os,q,Ca,B,Ia,Aa,Ns,z,Da,js,Sa,La,Gs,O,Ts,as,Ra,Ms,y,es,vs,Ba,Oa,Na,ts,ys,Ga,Ta,Ma,ns,bs,Ja,Ua,Js,ls,Va,Us,N,Vs,G,ks,ke,Fs,os,Fa,Ys,T,Ws,M,xs,xe,Hs,P,Ya,J,Wa,Ha,Ks,is,Ka,Qs,U,Xs,V,$s,$e,Zs,C,Qa,ws,Xa,Za,sa,F,aa,rs,se,ea,Y,ta,I,ae,ps,ee,te,na,W,la,b,ne,Es,le,oe,qs,ie,re,oa,H,ia,K,zs,we,ra,k,pe,Ps,me,ce,Cs,fe,ge,pa,Q,ma,X,Is,Ee,ca,A,he,Z,ue,de,fa;return D=new pt({}),S=new x({props:{code:"pip install -U albumentations opencv-python",highlighted:"pip install -U albumentations opencv-python"}}),O=new x({props:{code:`from datasets import load_dataset

dataset = load_dataset("scene_parse_150", split="train")
index = 10
dataset[index]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;scene_parse_150&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>index = <span class="hljs-number">10</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=683x512 at <span class="hljs-number">0x7FB37B0EC810</span>&gt;,
 <span class="hljs-string">&#x27;annotation&#x27;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=L size=683x512 at <span class="hljs-number">0x7FB37B0EC9D0</span>&gt;,
 <span class="hljs-string">&#x27;scene_category&#x27;</span>: <span class="hljs-number">927</span>}`}}),N=new x({props:{code:'dataset[index]["image"]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index][<span class="hljs-string">&quot;image&quot;</span>]'}}),T=new x({props:{code:'dataset[index]["annotation"]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index][<span class="hljs-string">&quot;annotation&quot;</span>]'}}),U=new x({props:{code:`import matplotlib.pyplot as plt

def visualize_seg_mask(image: np.ndarray, mask: np.ndarray):
   color_seg = np.zeros((mask.shape[0], mask.shape[1], 3), dtype=np.uint8)
   palette = np.array(create_ade20k_label_colormap())
   for label, color in enumerate(palette):
       color_seg[mask == label, :] = color
   color_seg = color_seg[..., ::-1]  # convert to BGR

   img = np.array(image) * 0.5 + color_seg * 0.5  # plot the image with the segmentation map
   img = img.astype(np.uint8)

   plt.figure(figsize=(15, 10))
   plt.imshow(img)
   plt.axis("off")
   plt.show()


visualize_seg_mask(
    np.array(dataset[index]["image"]),
    np.array(dataset[index]["annotation"])
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">visualize_seg_mask</span>(<span class="hljs-params">image: np.ndarray, mask: np.ndarray</span>):
<span class="hljs-meta">... </span>   color_seg = np.zeros((mask.shape[<span class="hljs-number">0</span>], mask.shape[<span class="hljs-number">1</span>], <span class="hljs-number">3</span>), dtype=np.uint8)
<span class="hljs-meta">... </span>   palette = np.array(create_ade20k_label_colormap())
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> label, color <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(palette):
<span class="hljs-meta">... </span>       color_seg[mask == label, :] = color
<span class="hljs-meta">... </span>   color_seg = color_seg[..., ::-<span class="hljs-number">1</span>]  <span class="hljs-comment"># convert to BGR</span>

<span class="hljs-meta">... </span>   img = np.array(image) * <span class="hljs-number">0.5</span> + color_seg * <span class="hljs-number">0.5</span>  <span class="hljs-comment"># plot the image with the segmentation map</span>
<span class="hljs-meta">... </span>   img = img.astype(np.uint8)

<span class="hljs-meta">... </span>   plt.figure(figsize=(<span class="hljs-number">15</span>, <span class="hljs-number">10</span>))
<span class="hljs-meta">... </span>   plt.imshow(img)
<span class="hljs-meta">... </span>   plt.axis(<span class="hljs-string">&quot;off&quot;</span>)
<span class="hljs-meta">... </span>   plt.show()


<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(
<span class="hljs-meta">... </span>    np.array(dataset[index][<span class="hljs-string">&quot;image&quot;</span>]),
<span class="hljs-meta">... </span>    np.array(dataset[index][<span class="hljs-string">&quot;annotation&quot;</span>])
<span class="hljs-meta">... </span>)`}}),F=new x({props:{code:`import albumentations as A

transform = A.Compose(
    [
        A.Resize(256, 256),
        A.RandomBrightnessContrast(brightness_limit=0.3, contrast_limit=0.3, p=0.5),
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> albumentations <span class="hljs-keyword">as</span> A

<span class="hljs-meta">&gt;&gt;&gt; </span>transform = A.Compose(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        A.Resize(<span class="hljs-number">256</span>, <span class="hljs-number">256</span>),
<span class="hljs-meta">... </span>        A.RandomBrightnessContrast(brightness_limit=<span class="hljs-number">0.3</span>, contrast_limit=<span class="hljs-number">0.3</span>, p=<span class="hljs-number">0.5</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),Y=new x({props:{code:`def transforms(examples):
    transformed_images, transformed_masks = [], []
    for image, seg_mask in zip(examples["image"], examples["annotation"]):
        image, seg_mask = np.array(image), np.array(seg_mask)
        transformed = transform(image=image, mask=seg_mask)
        transformed_images.append(transformed["image"])
        transformed_masks.append(transformed["mask"])
    examples["pixel_values"] = transformed_images
    examples["label"] = transformed_masks
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    transformed_images, transformed_masks = [], []
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> image, seg_mask <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(examples[<span class="hljs-string">&quot;image&quot;</span>], examples[<span class="hljs-string">&quot;annotation&quot;</span>]):
<span class="hljs-meta">... </span>        image, seg_mask = np.array(image), np.array(seg_mask)
<span class="hljs-meta">... </span>        transformed = transform(image=image, mask=seg_mask)
<span class="hljs-meta">... </span>        transformed_images.append(transformed[<span class="hljs-string">&quot;image&quot;</span>])
<span class="hljs-meta">... </span>        transformed_masks.append(transformed[<span class="hljs-string">&quot;mask&quot;</span>])
...
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = transformed_images
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;label&quot;</span>] = transformed_masks
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),W=new x({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),H=new x({props:{code:`image = np.array(dataset[index]["pixel_values"])
mask = np.array(dataset[index]["label"])

visualize_seg_mask(image, mask)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.array(dataset[index][<span class="hljs-string">&quot;pixel_values&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>mask = np.array(dataset[index][<span class="hljs-string">&quot;label&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(image, mask)`}}),Q=new x({props:{code:`from torchvision.transforms import Resize, ColorJitter, Compose

transformation_chain = Compose([
    Resize((256, 256)),
    ColorJitter(brightness=0.25, contrast=0.25, saturation=0.25, hue=0.1)
])
resize = Resize((256, 256))

def train_transforms(example_batch):
    example_batch["pixel_values"] = [transformation_chain(x) for x in example_batch["image"]]
    example_batch["label"] = [resize(x) for x in example_batch["annotation"]]
    return example_batch

dataset.set_transform(train_transforms)

image = np.array(dataset[index]["pixel_values"])
mask = np.array(dataset[index]["label"])

visualize_seg_mask(image, mask)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> Resize, ColorJitter, Compose

<span class="hljs-meta">&gt;&gt;&gt; </span>transformation_chain = Compose([
<span class="hljs-meta">... </span>    Resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>)),
<span class="hljs-meta">... </span>    ColorJitter(brightness=<span class="hljs-number">0.25</span>, contrast=<span class="hljs-number">0.25</span>, saturation=<span class="hljs-number">0.25</span>, hue=<span class="hljs-number">0.1</span>)
<span class="hljs-meta">... </span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>resize = Resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">train_transforms</span>(<span class="hljs-params">example_batch</span>):
<span class="hljs-meta">... </span>    example_batch[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [transformation_chain(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example_batch[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    example_batch[<span class="hljs-string">&quot;label&quot;</span>] = [resize(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example_batch[<span class="hljs-string">&quot;annotation&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> example_batch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(train_transforms)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.array(dataset[index][<span class="hljs-string">&quot;pixel_values&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>mask = np.array(dataset[index][<span class="hljs-string">&quot;label&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(image, mask)`}}),{c(){$=l("meta"),Ds=m(),w=l("h1"),E=l("a"),hs=l("span"),g(D.$$.fragment),ya=m(),us=l("span"),ba=i("Semantic segmentation"),Ss=m(),ss=l("p"),ka=i(`Semantic segmentation datasets are used to train a model to classify every pixel in an image. There are
a wide variety of applications enabled by these datasets such as background removal from images, stylizing
images, or scene understanding for autonomous driving. This guide will show you how to apply transformations
to an image segmentation dataset.`),Ls=m(),v=l("p"),xa=i("Before you start, make sure you have up-to-date versions of "),ds=l("code"),$a=i("albumentations"),wa=i(" and "),_s=l("code"),Ea=i("cv2"),qa=i(" installed:"),Rs=m(),g(S.$$.fragment),Bs=m(),L=l("p"),R=l("a"),za=i("Albumentations"),Pa=i(` is a Python library for performing data augmentation
for computer vision. It supports various computer vision tasks such as image classification, object
detection, segmentation, and keypoint estimation.`),Os=m(),q=l("p"),Ca=i("This guide uses the "),B=l("a"),Ia=i("Scene Parsing"),Aa=i(` dataset for segmenting
and parsing an image into different image regions associated with semantic categories, such as sky, road, person, and bed.`),Ns=m(),z=l("p"),Da=i("Load the "),js=l("code"),Sa=i("train"),La=i(" split of the dataset and take a look at an example:"),Gs=m(),g(O.$$.fragment),Ts=m(),as=l("p"),Ra=i("The dataset has three fields:"),Ms=m(),y=l("ul"),es=l("li"),vs=l("code"),Ba=i("image"),Oa=i(": a PIL image object."),Na=m(),ts=l("li"),ys=l("code"),Ga=i("annotation"),Ta=i(": segmentation mask of the image."),Ma=m(),ns=l("li"),bs=l("code"),Ja=i("scene_category"),Ua=i(": the label or scene category of the image (like \u201Ckitchen\u201D or \u201Coffice\u201D)."),Js=m(),ls=l("p"),Va=i("Next, check out an image with:"),Us=m(),g(N.$$.fragment),Vs=m(),G=l("div"),ks=l("img"),Fs=m(),os=l("p"),Fa=i("Similarly, you can check out the respective segmentation mask:"),Ys=m(),g(T.$$.fragment),Ws=m(),M=l("div"),xs=l("img"),Hs=m(),P=l("p"),Ya=i("We can also add a "),J=l("a"),Wa=i("color palette"),Ha=i(` on the
segmentation mask and overlay it on top of the original image to visualize the dataset:`),Ks=m(),is=l("p"),Ka=i("After defining the color palette, you should be ready to visualize some overlays."),Qs=m(),g(U.$$.fragment),Xs=m(),V=l("div"),$s=l("img"),Zs=m(),C=l("p"),Qa=i("Now apply some augmentations with "),ws=l("code"),Xa=i("albumentations"),Za=i(". You\u2019ll first resize the image and adjust its brightness."),sa=m(),g(F.$$.fragment),aa=m(),rs=l("p"),se=i("Create a function to apply the transformation to the images:"),ea=m(),g(Y.$$.fragment),ta=m(),I=l("p"),ae=i("Use the "),ps=l("a"),ee=i("set_transform()"),te=i(" function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),na=m(),g(W.$$.fragment),la=m(),b=l("p"),ne=i("You can verify the transformation worked by indexing into the "),Es=l("code"),le=i("pixel_values"),oe=i(" and "),qs=l("code"),ie=i("label"),re=i(" of an example:"),oa=m(),g(H.$$.fragment),ia=m(),K=l("div"),zs=l("img"),ra=m(),k=l("p"),pe=i("In this guide, you have used "),Ps=l("code"),me=i("albumentations"),ce=i(" for augmenting the dataset. It\u2019s also possible to use "),Cs=l("code"),fe=i("torchvision"),ge=i(" to apply some similar transforms."),pa=m(),g(Q.$$.fragment),ma=m(),X=l("div"),Is=l("img"),ca=m(),A=l("p"),he=i(`Now that you know how to process a dataset for semantic segmentation, learn
`),Z=l("a"),ue=i("how to train a semantic segmentation model"),de=i(`
and use it for inference.`),this.h()},l(s){const t=ot('[data-svelte="svelte-1phssyn"]',document.head);$=o(t,"META",{name:!0,content:!0}),t.forEach(a),Ds=c(s),w=o(s,"H1",{class:!0});var ga=p(w);E=o(ga,"A",{id:!0,class:!0,href:!0});var qe=p(E);hs=o(qe,"SPAN",{});var ze=p(hs);h(D.$$.fragment,ze),ze.forEach(a),qe.forEach(a),ya=c(ga),us=o(ga,"SPAN",{});var Pe=p(us);ba=r(Pe,"Semantic segmentation"),Pe.forEach(a),ga.forEach(a),Ss=c(s),ss=o(s,"P",{});var Ce=p(ss);ka=r(Ce,`Semantic segmentation datasets are used to train a model to classify every pixel in an image. There are
a wide variety of applications enabled by these datasets such as background removal from images, stylizing
images, or scene understanding for autonomous driving. This guide will show you how to apply transformations
to an image segmentation dataset.`),Ce.forEach(a),Ls=c(s),v=o(s,"P",{});var ms=p(v);xa=r(ms,"Before you start, make sure you have up-to-date versions of "),ds=o(ms,"CODE",{});var Ie=p(ds);$a=r(Ie,"albumentations"),Ie.forEach(a),wa=r(ms," and "),_s=o(ms,"CODE",{});var Ae=p(_s);Ea=r(Ae,"cv2"),Ae.forEach(a),qa=r(ms," installed:"),ms.forEach(a),Rs=c(s),h(S.$$.fragment,s),Bs=c(s),L=o(s,"P",{});var _e=p(L);R=o(_e,"A",{href:!0,rel:!0});var De=p(R);za=r(De,"Albumentations"),De.forEach(a),Pa=r(_e,` is a Python library for performing data augmentation
for computer vision. It supports various computer vision tasks such as image classification, object
detection, segmentation, and keypoint estimation.`),_e.forEach(a),Os=c(s),q=o(s,"P",{});var ha=p(q);Ca=r(ha,"This guide uses the "),B=o(ha,"A",{href:!0,rel:!0});var Se=p(B);Ia=r(Se,"Scene Parsing"),Se.forEach(a),Aa=r(ha,` dataset for segmenting
and parsing an image into different image regions associated with semantic categories, such as sky, road, person, and bed.`),ha.forEach(a),Ns=c(s),z=o(s,"P",{});var ua=p(z);Da=r(ua,"Load the "),js=o(ua,"CODE",{});var Le=p(js);Sa=r(Le,"train"),Le.forEach(a),La=r(ua," split of the dataset and take a look at an example:"),ua.forEach(a),Gs=c(s),h(O.$$.fragment,s),Ts=c(s),as=o(s,"P",{});var Re=p(as);Ra=r(Re,"The dataset has three fields:"),Re.forEach(a),Ms=c(s),y=o(s,"UL",{});var cs=p(y);es=o(cs,"LI",{});var je=p(es);vs=o(je,"CODE",{});var Be=p(vs);Ba=r(Be,"image"),Be.forEach(a),Oa=r(je,": a PIL image object."),je.forEach(a),Na=c(cs),ts=o(cs,"LI",{});var ve=p(ts);ys=o(ve,"CODE",{});var Oe=p(ys);Ga=r(Oe,"annotation"),Oe.forEach(a),Ta=r(ve,": segmentation mask of the image."),ve.forEach(a),Ma=c(cs),ns=o(cs,"LI",{});var ye=p(ns);bs=o(ye,"CODE",{});var Ne=p(bs);Ja=r(Ne,"scene_category"),Ne.forEach(a),Ua=r(ye,": the label or scene category of the image (like \u201Ckitchen\u201D or \u201Coffice\u201D)."),ye.forEach(a),cs.forEach(a),Js=c(s),ls=o(s,"P",{});var Ge=p(ls);Va=r(Ge,"Next, check out an image with:"),Ge.forEach(a),Us=c(s),h(N.$$.fragment,s),Vs=c(s),G=o(s,"DIV",{class:!0});var Te=p(G);ks=o(Te,"IMG",{src:!0}),Te.forEach(a),Fs=c(s),os=o(s,"P",{});var Me=p(os);Fa=r(Me,"Similarly, you can check out the respective segmentation mask:"),Me.forEach(a),Ys=c(s),h(T.$$.fragment,s),Ws=c(s),M=o(s,"DIV",{class:!0});var Je=p(M);xs=o(Je,"IMG",{src:!0}),Je.forEach(a),Hs=c(s),P=o(s,"P",{});var da=p(P);Ya=r(da,"We can also add a "),J=o(da,"A",{href:!0,rel:!0});var Ue=p(J);Wa=r(Ue,"color palette"),Ue.forEach(a),Ha=r(da,` on the
segmentation mask and overlay it on top of the original image to visualize the dataset:`),da.forEach(a),Ks=c(s),is=o(s,"P",{});var Ve=p(is);Ka=r(Ve,"After defining the color palette, you should be ready to visualize some overlays."),Ve.forEach(a),Qs=c(s),h(U.$$.fragment,s),Xs=c(s),V=o(s,"DIV",{class:!0});var Fe=p(V);$s=o(Fe,"IMG",{src:!0}),Fe.forEach(a),Zs=c(s),C=o(s,"P",{});var _a=p(C);Qa=r(_a,"Now apply some augmentations with "),ws=o(_a,"CODE",{});var Ye=p(ws);Xa=r(Ye,"albumentations"),Ye.forEach(a),Za=r(_a,". You\u2019ll first resize the image and adjust its brightness."),_a.forEach(a),sa=c(s),h(F.$$.fragment,s),aa=c(s),rs=o(s,"P",{});var We=p(rs);se=r(We,"Create a function to apply the transformation to the images:"),We.forEach(a),ea=c(s),h(Y.$$.fragment,s),ta=c(s),I=o(s,"P",{});var ja=p(I);ae=r(ja,"Use the "),ps=o(ja,"A",{href:!0});var He=p(ps);ee=r(He,"set_transform()"),He.forEach(a),te=r(ja," function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),ja.forEach(a),na=c(s),h(W.$$.fragment,s),la=c(s),b=o(s,"P",{});var fs=p(b);ne=r(fs,"You can verify the transformation worked by indexing into the "),Es=o(fs,"CODE",{});var Ke=p(Es);le=r(Ke,"pixel_values"),Ke.forEach(a),oe=r(fs," and "),qs=o(fs,"CODE",{});var Qe=p(qs);ie=r(Qe,"label"),Qe.forEach(a),re=r(fs," of an example:"),fs.forEach(a),oa=c(s),h(H.$$.fragment,s),ia=c(s),K=o(s,"DIV",{class:!0});var Xe=p(K);zs=o(Xe,"IMG",{src:!0}),Xe.forEach(a),ra=c(s),k=o(s,"P",{});var gs=p(k);pe=r(gs,"In this guide, you have used "),Ps=o(gs,"CODE",{});var Ze=p(Ps);me=r(Ze,"albumentations"),Ze.forEach(a),ce=r(gs," for augmenting the dataset. It\u2019s also possible to use "),Cs=o(gs,"CODE",{});var st=p(Cs);fe=r(st,"torchvision"),st.forEach(a),ge=r(gs," to apply some similar transforms."),gs.forEach(a),pa=c(s),h(Q.$$.fragment,s),ma=c(s),X=o(s,"DIV",{class:!0});var at=p(X);Is=o(at,"IMG",{src:!0}),at.forEach(a),ca=c(s),A=o(s,"P",{});var va=p(A);he=r(va,`Now that you know how to process a dataset for semantic segmentation, learn
`),Z=o(va,"A",{href:!0,rel:!0});var et=p(Z);ue=r(et,"how to train a semantic segmentation model"),et.forEach(a),de=r(va,`
and use it for inference.`),va.forEach(a),this.h()},h(){f($,"name","hf:doc:metadata"),f($,"content",JSON.stringify(ct)),f(E,"id","semantic-segmentation"),f(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(E,"href","#semantic-segmentation"),f(w,"class","relative group"),f(R,"href","https://albumentations.ai/"),f(R,"rel","nofollow"),f(B,"href","https://huggingface.co/datasets/scene_parse_150"),f(B,"rel","nofollow"),As(ks.src,ke="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/image_seg.png")||f(ks,"src",ke),f(G,"class","flex justify-center"),As(xs.src,xe="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/seg_mask.png")||f(xs,"src",xe),f(M,"class","flex justify-center"),f(J,"href","https://github.com/tensorflow/models/blob/3f1ca33afe3c1631b733ea7e40c294273b9e406d/research/deeplab/utils/get_dataset_colormap.py#L51"),f(J,"rel","nofollow"),As($s.src,$e="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/seg_overlay.png")||f($s,"src",$e),f(V,"class","flex justify-center"),f(ps,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.set_transform"),As(zs.src,we="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/albumentations_seg.png")||f(zs,"src",we),f(K,"class","flex justify-center"),As(Is.src,Ee="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/torchvision_seg.png")||f(Is,"src",Ee),f(X,"class","flex justify-center"),f(Z,"href","https://huggingface.co/docs/transformers/tasks/semantic_segmentation"),f(Z,"rel","nofollow")},m(s,t){e(document.head,$),n(s,Ds,t),n(s,w,t),e(w,E),e(E,hs),u(D,hs,null),e(w,ya),e(w,us),e(us,ba),n(s,Ss,t),n(s,ss,t),e(ss,ka),n(s,Ls,t),n(s,v,t),e(v,xa),e(v,ds),e(ds,$a),e(v,wa),e(v,_s),e(_s,Ea),e(v,qa),n(s,Rs,t),u(S,s,t),n(s,Bs,t),n(s,L,t),e(L,R),e(R,za),e(L,Pa),n(s,Os,t),n(s,q,t),e(q,Ca),e(q,B),e(B,Ia),e(q,Aa),n(s,Ns,t),n(s,z,t),e(z,Da),e(z,js),e(js,Sa),e(z,La),n(s,Gs,t),u(O,s,t),n(s,Ts,t),n(s,as,t),e(as,Ra),n(s,Ms,t),n(s,y,t),e(y,es),e(es,vs),e(vs,Ba),e(es,Oa),e(y,Na),e(y,ts),e(ts,ys),e(ys,Ga),e(ts,Ta),e(y,Ma),e(y,ns),e(ns,bs),e(bs,Ja),e(ns,Ua),n(s,Js,t),n(s,ls,t),e(ls,Va),n(s,Us,t),u(N,s,t),n(s,Vs,t),n(s,G,t),e(G,ks),n(s,Fs,t),n(s,os,t),e(os,Fa),n(s,Ys,t),u(T,s,t),n(s,Ws,t),n(s,M,t),e(M,xs),n(s,Hs,t),n(s,P,t),e(P,Ya),e(P,J),e(J,Wa),e(P,Ha),n(s,Ks,t),n(s,is,t),e(is,Ka),n(s,Qs,t),u(U,s,t),n(s,Xs,t),n(s,V,t),e(V,$s),n(s,Zs,t),n(s,C,t),e(C,Qa),e(C,ws),e(ws,Xa),e(C,Za),n(s,sa,t),u(F,s,t),n(s,aa,t),n(s,rs,t),e(rs,se),n(s,ea,t),u(Y,s,t),n(s,ta,t),n(s,I,t),e(I,ae),e(I,ps),e(ps,ee),e(I,te),n(s,na,t),u(W,s,t),n(s,la,t),n(s,b,t),e(b,ne),e(b,Es),e(Es,le),e(b,oe),e(b,qs),e(qs,ie),e(b,re),n(s,oa,t),u(H,s,t),n(s,ia,t),n(s,K,t),e(K,zs),n(s,ra,t),n(s,k,t),e(k,pe),e(k,Ps),e(Ps,me),e(k,ce),e(k,Cs),e(Cs,fe),e(k,ge),n(s,pa,t),u(Q,s,t),n(s,ma,t),n(s,X,t),e(X,Is),n(s,ca,t),n(s,A,t),e(A,he),e(A,Z),e(Z,ue),e(A,de),fa=!0},p:it,i(s){fa||(d(D.$$.fragment,s),d(S.$$.fragment,s),d(O.$$.fragment,s),d(N.$$.fragment,s),d(T.$$.fragment,s),d(U.$$.fragment,s),d(F.$$.fragment,s),d(Y.$$.fragment,s),d(W.$$.fragment,s),d(H.$$.fragment,s),d(Q.$$.fragment,s),fa=!0)},o(s){_(D.$$.fragment,s),_(S.$$.fragment,s),_(O.$$.fragment,s),_(N.$$.fragment,s),_(T.$$.fragment,s),_(U.$$.fragment,s),_(F.$$.fragment,s),_(Y.$$.fragment,s),_(W.$$.fragment,s),_(H.$$.fragment,s),_(Q.$$.fragment,s),fa=!1},d(s){a($),s&&a(Ds),s&&a(w),j(D),s&&a(Ss),s&&a(ss),s&&a(Ls),s&&a(v),s&&a(Rs),j(S,s),s&&a(Bs),s&&a(L),s&&a(Os),s&&a(q),s&&a(Ns),s&&a(z),s&&a(Gs),j(O,s),s&&a(Ts),s&&a(as),s&&a(Ms),s&&a(y),s&&a(Js),s&&a(ls),s&&a(Us),j(N,s),s&&a(Vs),s&&a(G),s&&a(Fs),s&&a(os),s&&a(Ys),j(T,s),s&&a(Ws),s&&a(M),s&&a(Hs),s&&a(P),s&&a(Ks),s&&a(is),s&&a(Qs),j(U,s),s&&a(Xs),s&&a(V),s&&a(Zs),s&&a(C),s&&a(sa),j(F,s),s&&a(aa),s&&a(rs),s&&a(ea),j(Y,s),s&&a(ta),s&&a(I),s&&a(na),j(W,s),s&&a(la),s&&a(b),s&&a(oa),j(H,s),s&&a(ia),s&&a(K),s&&a(ra),s&&a(k),s&&a(pa),j(Q,s),s&&a(ma),s&&a(X),s&&a(ca),s&&a(A)}}}const ct={local:"semantic-segmentation",title:"Semantic segmentation"};function ft(be){return rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dt extends tt{constructor($){super();nt(this,$,ft,mt,lt,{})}}export{dt as default,ct as metadata};
