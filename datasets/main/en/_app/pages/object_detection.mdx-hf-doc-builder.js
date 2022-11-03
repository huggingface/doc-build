import{S as Vt,i as Ht,s as Jt,e as n,k as c,w as E,t,M as Wt,c as o,d as e,m,a as p,x as $,h as l,b as h,N as et,G as a,g as i,y as k,L as Kt,q as I,o as C,B as O,v as Qt}from"../chunks/vendor-hf-doc-builder.js";import{I as Xt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as B}from"../chunks/CodeBlock-hf-doc-builder.js";function Zt(tt){let v,Hs,w,D,js,R,ka,_s,Ia,Js,b,Ca,q,Oa,Da,S,Pa,Ta,Ws,u,Aa,ys,La,za,vs,Ga,Ba,Ks,N,Qs,P,Ra,M,ws,qa,Sa,Xs,ts,Na,Zs,F,sa,ls,Ma,aa,f,ns,Es,Fa,Ua,Ya,os,$s,Va,Ha,Ja,ps,ks,Wa,Ka,Qa,rs,Is,Xa,Za,se,U,Cs,ae,ee,x,is,Os,te,le,ne,cs,Ds,oe,pe,re,T,Ps,ie,ce,Y,me,he,ge,g,Ts,fe,de,As,xe,be,Ls,ue,je,zs,_e,ye,Gs,ve,we,Bs,Ee,$e,ea,j,ke,Rs,Ie,Ce,ms,Oe,De,ta,V,la,H,qs,lt,na,_,Pe,Ss,Te,Ae,Ns,Le,ze,oa,J,Ms,Ge,Be,pa,W,ra,A,Re,Fs,qe,Se,ia,K,ca,Q,Us,nt,ma,hs,Ne,ha,X,ga,L,Me,gs,Fe,Ue,fa,Z,da,fs,Ye,xa,ss,ba,z,Ve,as,He,Je,ua,es,Ys,ot,ja;return R=new Xt({}),N=new B({props:{code:"pip install -U albumentations opencv-python",highlighted:'pip <span class="hljs-keyword">install</span> -U albumentations opencv-python'}}),F=new B({props:{code:`
ds = load_dataset("cppe-5")
example = ds['train'][0]
example`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;cppe-5&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = ds[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>example
{<span class="hljs-string">&#x27;height&#x27;</span>: <span class="hljs-number">663</span>,
 <span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=943x663 at <span class="hljs-number">0x7FC3DC756250</span>&gt;,
 <span class="hljs-string">&#x27;image_id&#x27;</span>: <span class="hljs-number">15</span>,
 <span class="hljs-string">&#x27;objects&#x27;</span>: {<span class="hljs-string">&#x27;area&#x27;</span>: [<span class="hljs-number">3796</span>, <span class="hljs-number">1596</span>, <span class="hljs-number">152768</span>, <span class="hljs-number">81002</span>],
  <span class="hljs-string">&#x27;bbox&#x27;</span>: [[<span class="hljs-number">302.0</span>, <span class="hljs-number">109.0</span>, <span class="hljs-number">73.0</span>, <span class="hljs-number">52.0</span>],
   [<span class="hljs-number">810.0</span>, <span class="hljs-number">100.0</span>, <span class="hljs-number">57.0</span>, <span class="hljs-number">28.0</span>],
   [<span class="hljs-number">160.0</span>, <span class="hljs-number">31.0</span>, <span class="hljs-number">248.0</span>, <span class="hljs-number">616.0</span>],
   [<span class="hljs-number">741.0</span>, <span class="hljs-number">68.0</span>, <span class="hljs-number">202.0</span>, <span class="hljs-number">401.0</span>]],
  <span class="hljs-string">&#x27;category&#x27;</span>: [<span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
  <span class="hljs-string">&#x27;id&#x27;</span>: [<span class="hljs-number">114</span>, <span class="hljs-number">115</span>, <span class="hljs-number">116</span>, <span class="hljs-number">117</span>]},
 <span class="hljs-string">&#x27;width&#x27;</span>: <span class="hljs-number">943</span>}`}}),V=new B({props:{code:`import torch
from torchvision.ops import box_convert
from torchvision.utils import draw_bounding_boxes
from torchvision.transforms.functional import pil_to_tensor, to_pil_image

categories = ds['train'].features['objects'].feature['category']

boxes_xywh = torch.tensor(example['objects']['bbox'])
boxes_xyxy = box_convert(boxes_xywh, 'xywh', 'xyxy')
labels = [categories.int2str(x) for x in example['objects']['category']]
to_pil_image(
    draw_bounding_boxes(
        pil_to_tensor(example['image']),
        boxes_xyxy,
        colors="red",
        labels=labels,
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.ops <span class="hljs-keyword">import</span> box_convert
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.utils <span class="hljs-keyword">import</span> draw_bounding_boxes
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms.functional <span class="hljs-keyword">import</span> pil_to_tensor, to_pil_image

<span class="hljs-meta">&gt;&gt;&gt; </span>categories = ds[<span class="hljs-string">&#x27;train&#x27;</span>].features[<span class="hljs-string">&#x27;objects&#x27;</span>].feature[<span class="hljs-string">&#x27;category&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xywh = torch.tensor(example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;bbox&#x27;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xyxy = box_convert(boxes_xywh, <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = [categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        pil_to_tensor(example[<span class="hljs-string">&#x27;image&#x27;</span>]),
<span class="hljs-meta">... </span>        boxes_xyxy,
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&quot;red&quot;</span>,
<span class="hljs-meta">... </span>        labels=labels,
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),W=new B({props:{code:`import albumentations as A
import numpy as np

transform = A.Compose([
    A.Resize(480, 480),
    A.HorizontalFlip(p=1.0),
    A.RandomBrightnessContrast(p=1.0),
], bbox_params=A.BboxParams(format='coco',  label_fields=['category']))

# RGB PIL Image -> BGR Numpy array
image = np.flip(np.array(example['image']), -1)
out = transform(
    image=image,
    bboxes=example['objects']['bbox'],
    category=example['objects']['category'],
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> albumentations <span class="hljs-keyword">as</span> A
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>transform = A.Compose([
<span class="hljs-meta">... </span>    A.Resize(<span class="hljs-number">480</span>, <span class="hljs-number">480</span>),
<span class="hljs-meta">... </span>    A.HorizontalFlip(p=<span class="hljs-number">1.0</span>),
<span class="hljs-meta">... </span>    A.RandomBrightnessContrast(p=<span class="hljs-number">1.0</span>),
<span class="hljs-meta">... </span>], bbox_params=A.BboxParams(<span class="hljs-built_in">format</span>=<span class="hljs-string">&#x27;coco&#x27;</span>,  label_fields=[<span class="hljs-string">&#x27;category&#x27;</span>]))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># RGB PIL Image -&gt; BGR Numpy array</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.flip(np.array(example[<span class="hljs-string">&#x27;image&#x27;</span>]), -<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>out = transform(
<span class="hljs-meta">... </span>    image=image,
<span class="hljs-meta">... </span>    bboxes=example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;bbox&#x27;</span>],
<span class="hljs-meta">... </span>    category=example[<span class="hljs-string">&#x27;objects&#x27;</span>][<span class="hljs-string">&#x27;category&#x27;</span>],
<span class="hljs-meta">... </span>)`}}),K=new B({props:{code:`image = torch.tensor(out['image']).flip(-1).permute(2, 0, 1)
boxes_xywh = torch.stack([torch.tensor(x) for x in out['bboxes']])
boxes_xyxy = box_convert(boxes_xywh, 'xywh', 'xyxy')
labels = [categories.int2str(x) for x in out['category']]
to_pil_image(
    draw_bounding_boxes(
        image,
        boxes_xyxy,
        colors='red',
        labels=labels
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>image = torch.tensor(out[<span class="hljs-string">&#x27;image&#x27;</span>]).flip(-<span class="hljs-number">1</span>).permute(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xywh = torch.stack([torch.tensor(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> out[<span class="hljs-string">&#x27;bboxes&#x27;</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes_xyxy = box_convert(boxes_xywh, <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = [categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> out[<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        image,
<span class="hljs-meta">... </span>        boxes_xyxy,
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&#x27;red&#x27;</span>,
<span class="hljs-meta">... </span>        labels=labels
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),X=new B({props:{code:`def transforms(examples):
    images, bboxes, categories = [], [], []
    for image, objects in zip(examples['image'], examples['objects']):
        image = np.array(image.convert("RGB"))[:, :, ::-1]
        out = transform(
            image=image,
            bboxes=objects['bbox'],
            category=objects['category']
        )
        images.append(torch.tensor(out['image']).flip(-1).permute(2, 0, 1))
        bboxes.append(torch.tensor(out['bboxes']))
        categories.append(out['category'])
    return {'image': images, 'bbox': bboxes, 'category': categories}`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    images, bboxes, categories = [], [], []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> image, objects <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(examples[<span class="hljs-string">&#x27;image&#x27;</span>], examples[<span class="hljs-string">&#x27;objects&#x27;</span>]):
<span class="hljs-meta">... </span>        image = np.array(image.convert(<span class="hljs-string">&quot;RGB&quot;</span>))[:, :, ::-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        out = transform(
<span class="hljs-meta">... </span>            image=image,
<span class="hljs-meta">... </span>            bboxes=objects[<span class="hljs-string">&#x27;bbox&#x27;</span>],
<span class="hljs-meta">... </span>            category=objects[<span class="hljs-string">&#x27;category&#x27;</span>]
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        images.append(torch.tensor(out[<span class="hljs-string">&#x27;image&#x27;</span>]).flip(-<span class="hljs-number">1</span>).permute(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>))
<span class="hljs-meta">... </span>        bboxes.append(torch.tensor(out[<span class="hljs-string">&#x27;bboxes&#x27;</span>]))
<span class="hljs-meta">... </span>        categories.append(out[<span class="hljs-string">&#x27;category&#x27;</span>])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {<span class="hljs-string">&#x27;image&#x27;</span>: images, <span class="hljs-string">&#x27;bbox&#x27;</span>: bboxes, <span class="hljs-string">&#x27;category&#x27;</span>: categories}`}}),Z=new B({props:{code:"ds['train'].set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds[<span class="hljs-string">&#x27;train&#x27;</span>].set_transform(transforms)'}}),ss=new B({props:{code:`example = ds['train'][10]
to_pil_image(
    draw_bounding_boxes(
        example['image'],
        box_convert(example['bbox'], 'xywh', 'xyxy'),
        colors='red',
        labels=[categories.int2str(x) for x in example['category']]
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>example = ds[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">10</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>to_pil_image(
<span class="hljs-meta">... </span>    draw_bounding_boxes(
<span class="hljs-meta">... </span>        example[<span class="hljs-string">&#x27;image&#x27;</span>],
<span class="hljs-meta">... </span>        box_convert(example[<span class="hljs-string">&#x27;bbox&#x27;</span>], <span class="hljs-string">&#x27;xywh&#x27;</span>, <span class="hljs-string">&#x27;xyxy&#x27;</span>),
<span class="hljs-meta">... </span>        colors=<span class="hljs-string">&#x27;red&#x27;</span>,
<span class="hljs-meta">... </span>        labels=[categories.int2str(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example[<span class="hljs-string">&#x27;category&#x27;</span>]]
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)`}}),{c(){v=n("meta"),Hs=c(),w=n("h1"),D=n("a"),js=n("span"),E(R.$$.fragment),ka=c(),_s=n("span"),Ia=t("Object detection"),Js=c(),b=n("p"),Ca=t("Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),q=n("a"),Oa=t("tutorial"),Da=t(" from "),S=n("a"),Pa=t("Albumentations"),Ta=t("."),Ws=c(),u=n("p"),Aa=t("To run these examples, make sure you have up-to-date versions of "),ys=n("code"),La=t("albumentations"),za=t(" and "),vs=n("code"),Ga=t("cv2"),Ba=t(" installed:"),Ks=c(),E(N.$$.fragment),Qs=c(),P=n("p"),Ra=t("In this example, you\u2019ll use the "),M=n("a"),ws=n("code"),qa=t("cppe-5"),Sa=t(" dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),Xs=c(),ts=n("p"),Na=t("Load the dataset and take a look at an example:"),Zs=c(),E(F.$$.fragment),sa=c(),ls=n("p"),Ma=t("The dataset has the following fields:"),aa=c(),f=n("ul"),ns=n("li"),Es=n("code"),Fa=t("image"),Ua=t(": PIL.Image.Image object containing the image."),Ya=c(),os=n("li"),$s=n("code"),Va=t("image_id"),Ha=t(": The image ID."),Ja=c(),ps=n("li"),ks=n("code"),Wa=t("height"),Ka=t(": The image height."),Qa=c(),rs=n("li"),Is=n("code"),Xa=t("width"),Za=t(": The image width."),se=c(),U=n("li"),Cs=n("code"),ae=t("objects"),ee=t(": A dictionary containing bounding box metadata for the objects in the image:"),x=n("ul"),is=n("li"),Os=n("code"),te=t("id"),le=t(": The annotation id."),ne=c(),cs=n("li"),Ds=n("code"),oe=t("area"),pe=t(": The area of the bounding box."),re=c(),T=n("li"),Ps=n("code"),ie=t("bbox"),ce=t(": The object\u2019s bounding box (in the "),Y=n("a"),me=t("coco"),he=t(" format)."),ge=c(),g=n("li"),Ts=n("code"),fe=t("category"),de=t(": The object\u2019s category, with possible values including "),As=n("code"),xe=t("Coverall (0)"),be=t(", "),Ls=n("code"),ue=t("Face_Shield (1)"),je=t(", "),zs=n("code"),_e=t("Gloves (2)"),ye=t(", "),Gs=n("code"),ve=t("Goggles (3)"),we=t(" and "),Bs=n("code"),Ee=t("Mask (4)"),$e=t("."),ea=c(),j=n("p"),ke=t("You can visualize the "),Rs=n("code"),Ie=t("bboxes"),Ce=t(" on the image using some internal torch utilities. To do that, you will need to reference the "),ms=n("a"),Oe=t("ClassLabel"),De=t(" feature associated with the category IDs so you can look up the string labels:"),ta=c(),E(V.$$.fragment),la=c(),H=n("div"),qs=n("img"),na=c(),_=n("p"),Pe=t("With "),Ss=n("code"),Te=t("albumentations"),Ae=t(", you can apply transforms that will affect the image while also updating the "),Ns=n("code"),Le=t("bboxes"),ze=t(" accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),oa=c(),J=n("p"),Ms=n("code"),Ge=t("albumentations"),Be=t(" expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),pa=c(),E(W.$$.fragment),ra=c(),A=n("p"),Re=t("Now when you visualize the result, the image should be flipped, but the "),Fs=n("code"),qe=t("bboxes"),Se=t(" should still be in the right places."),ia=c(),E(K.$$.fragment),ca=c(),Q=n("div"),Us=n("img"),ma=c(),hs=n("p"),Ne=t("Create a function to apply the transform to a batch of examples:"),ha=c(),E(X.$$.fragment),ga=c(),L=n("p"),Me=t("Use the "),gs=n("a"),Fe=t("set_transform()"),Ue=t(" function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),fa=c(),E(Z.$$.fragment),da=c(),fs=n("p"),Ye=t("You can verify the transform works by visualizing the 10th example:"),xa=c(),E(ss.$$.fragment),ba=c(),z=n("p"),Ve=t(`To learn how to leverage parts of \u{1F917} datasets end-to-end for training an object detection model, refer to
`),as=n("a"),He=t("this notebook"),Je=t("."),ua=c(),es=n("div"),Ys=n("img"),this.h()},l(s){const r=Wt('[data-svelte="svelte-1phssyn"]',document.head);v=o(r,"META",{name:!0,content:!0}),r.forEach(e),Hs=m(s),w=o(s,"H1",{class:!0});var _a=p(w);D=o(_a,"A",{id:!0,class:!0,href:!0});var pt=p(D);js=o(pt,"SPAN",{});var rt=p(js);$(R.$$.fragment,rt),rt.forEach(e),pt.forEach(e),ka=m(_a),_s=o(_a,"SPAN",{});var it=p(_s);Ia=l(it,"Object detection"),it.forEach(e),_a.forEach(e),Js=m(s),b=o(s,"P",{});var ds=p(b);Ca=l(ds,"Object detection models identify something in an image, and object detection datasets are used for applications such as autonomous driving and detecting natural hazards like wildfire. This guide will show you how to apply transformations to an object detection dataset following the "),q=o(ds,"A",{href:!0,rel:!0});var ct=p(q);Oa=l(ct,"tutorial"),ct.forEach(e),Da=l(ds," from "),S=o(ds,"A",{href:!0,rel:!0});var mt=p(S);Pa=l(mt,"Albumentations"),mt.forEach(e),Ta=l(ds,"."),ds.forEach(e),Ws=m(s),u=o(s,"P",{});var xs=p(u);Aa=l(xs,"To run these examples, make sure you have up-to-date versions of "),ys=o(xs,"CODE",{});var ht=p(ys);La=l(ht,"albumentations"),ht.forEach(e),za=l(xs," and "),vs=o(xs,"CODE",{});var gt=p(vs);Ga=l(gt,"cv2"),gt.forEach(e),Ba=l(xs," installed:"),xs.forEach(e),Ks=m(s),$(N.$$.fragment,s),Qs=m(s),P=o(s,"P",{});var ya=p(P);Ra=l(ya,"In this example, you\u2019ll use the "),M=o(ya,"A",{href:!0,rel:!0});var ft=p(M);ws=o(ft,"CODE",{});var dt=p(ws);qa=l(dt,"cppe-5"),dt.forEach(e),ft.forEach(e),Sa=l(ya," dataset for identifying medical personal protective equipment (PPE) in the context of the COVID-19 pandemic."),ya.forEach(e),Xs=m(s),ts=o(s,"P",{});var xt=p(ts);Na=l(xt,"Load the dataset and take a look at an example:"),xt.forEach(e),Zs=m(s),$(F.$$.fragment,s),sa=m(s),ls=o(s,"P",{});var bt=p(ls);Ma=l(bt,"The dataset has the following fields:"),bt.forEach(e),aa=m(s),f=o(s,"UL",{});var y=p(f);ns=o(y,"LI",{});var We=p(ns);Es=o(We,"CODE",{});var ut=p(Es);Fa=l(ut,"image"),ut.forEach(e),Ua=l(We,": PIL.Image.Image object containing the image."),We.forEach(e),Ya=m(y),os=o(y,"LI",{});var Ke=p(os);$s=o(Ke,"CODE",{});var jt=p($s);Va=l(jt,"image_id"),jt.forEach(e),Ha=l(Ke,": The image ID."),Ke.forEach(e),Ja=m(y),ps=o(y,"LI",{});var Qe=p(ps);ks=o(Qe,"CODE",{});var _t=p(ks);Wa=l(_t,"height"),_t.forEach(e),Ka=l(Qe,": The image height."),Qe.forEach(e),Qa=m(y),rs=o(y,"LI",{});var Xe=p(rs);Is=o(Xe,"CODE",{});var yt=p(Is);Xa=l(yt,"width"),yt.forEach(e),Za=l(Xe,": The image width."),Xe.forEach(e),se=m(y),U=o(y,"LI",{});var va=p(U);Cs=o(va,"CODE",{});var vt=p(Cs);ae=l(vt,"objects"),vt.forEach(e),ee=l(va,": A dictionary containing bounding box metadata for the objects in the image:"),x=o(va,"UL",{});var G=p(x);is=o(G,"LI",{});var Ze=p(is);Os=o(Ze,"CODE",{});var wt=p(Os);te=l(wt,"id"),wt.forEach(e),le=l(Ze,": The annotation id."),Ze.forEach(e),ne=m(G),cs=o(G,"LI",{});var st=p(cs);Ds=o(st,"CODE",{});var Et=p(Ds);oe=l(Et,"area"),Et.forEach(e),pe=l(st,": The area of the bounding box."),st.forEach(e),re=m(G),T=o(G,"LI",{});var Vs=p(T);Ps=o(Vs,"CODE",{});var $t=p(Ps);ie=l($t,"bbox"),$t.forEach(e),ce=l(Vs,": The object\u2019s bounding box (in the "),Y=o(Vs,"A",{href:!0,rel:!0});var kt=p(Y);me=l(kt,"coco"),kt.forEach(e),he=l(Vs," format)."),Vs.forEach(e),ge=m(G),g=o(G,"LI",{});var d=p(g);Ts=o(d,"CODE",{});var It=p(Ts);fe=l(It,"category"),It.forEach(e),de=l(d,": The object\u2019s category, with possible values including "),As=o(d,"CODE",{});var Ct=p(As);xe=l(Ct,"Coverall (0)"),Ct.forEach(e),be=l(d,", "),Ls=o(d,"CODE",{});var Ot=p(Ls);ue=l(Ot,"Face_Shield (1)"),Ot.forEach(e),je=l(d,", "),zs=o(d,"CODE",{});var Dt=p(zs);_e=l(Dt,"Gloves (2)"),Dt.forEach(e),ye=l(d,", "),Gs=o(d,"CODE",{});var Pt=p(Gs);ve=l(Pt,"Goggles (3)"),Pt.forEach(e),we=l(d," and "),Bs=o(d,"CODE",{});var Tt=p(Bs);Ee=l(Tt,"Mask (4)"),Tt.forEach(e),$e=l(d,"."),d.forEach(e),G.forEach(e),va.forEach(e),y.forEach(e),ea=m(s),j=o(s,"P",{});var bs=p(j);ke=l(bs,"You can visualize the "),Rs=o(bs,"CODE",{});var At=p(Rs);Ie=l(At,"bboxes"),At.forEach(e),Ce=l(bs," on the image using some internal torch utilities. To do that, you will need to reference the "),ms=o(bs,"A",{href:!0});var Lt=p(ms);Oe=l(Lt,"ClassLabel"),Lt.forEach(e),De=l(bs," feature associated with the category IDs so you can look up the string labels:"),bs.forEach(e),ta=m(s),$(V.$$.fragment,s),la=m(s),H=o(s,"DIV",{class:!0});var zt=p(H);qs=o(zt,"IMG",{src:!0}),zt.forEach(e),na=m(s),_=o(s,"P",{});var us=p(_);Pe=l(us,"With "),Ss=o(us,"CODE",{});var Gt=p(Ss);Te=l(Gt,"albumentations"),Gt.forEach(e),Ae=l(us,", you can apply transforms that will affect the image while also updating the "),Ns=o(us,"CODE",{});var Bt=p(Ns);Le=l(Bt,"bboxes"),Bt.forEach(e),ze=l(us," accordingly. In this case, the image is resized to (480, 480), flipped horizontally, and brightened."),us.forEach(e),oa=m(s),J=o(s,"P",{});var at=p(J);Ms=o(at,"CODE",{});var Rt=p(Ms);Ge=l(Rt,"albumentations"),Rt.forEach(e),Be=l(at," expects the image to be in BGR format, not RGB, so you\u2019ll have to convert the image before applying the transform."),at.forEach(e),pa=m(s),$(W.$$.fragment,s),ra=m(s),A=o(s,"P",{});var wa=p(A);Re=l(wa,"Now when you visualize the result, the image should be flipped, but the "),Fs=o(wa,"CODE",{});var qt=p(Fs);qe=l(qt,"bboxes"),qt.forEach(e),Se=l(wa," should still be in the right places."),wa.forEach(e),ia=m(s),$(K.$$.fragment,s),ca=m(s),Q=o(s,"DIV",{class:!0});var St=p(Q);Us=o(St,"IMG",{src:!0}),St.forEach(e),ma=m(s),hs=o(s,"P",{});var Nt=p(hs);Ne=l(Nt,"Create a function to apply the transform to a batch of examples:"),Nt.forEach(e),ha=m(s),$(X.$$.fragment,s),ga=m(s),L=o(s,"P",{});var Ea=p(L);Me=l(Ea,"Use the "),gs=o(Ea,"A",{href:!0});var Mt=p(gs);Fe=l(Mt,"set_transform()"),Mt.forEach(e),Ue=l(Ea," function to apply the transform on-the-fly which consumes less disk space. The randomness of data augmentation may return a different image if you access the same example twice. It is especially useful when training a model for several epochs."),Ea.forEach(e),fa=m(s),$(Z.$$.fragment,s),da=m(s),fs=o(s,"P",{});var Ft=p(fs);Ye=l(Ft,"You can verify the transform works by visualizing the 10th example:"),Ft.forEach(e),xa=m(s),$(ss.$$.fragment,s),ba=m(s),z=o(s,"P",{});var $a=p(z);Ve=l($a,`To learn how to leverage parts of \u{1F917} datasets end-to-end for training an object detection model, refer to
`),as=o($a,"A",{href:!0,rel:!0});var Ut=p(as);He=l(Ut,"this notebook"),Ut.forEach(e),Je=l($a,"."),$a.forEach(e),ua=m(s),es=o(s,"DIV",{class:!0});var Yt=p(es);Ys=o(Yt,"IMG",{src:!0}),Yt.forEach(e),this.h()},h(){h(v,"name","hf:doc:metadata"),h(v,"content",JSON.stringify(sl)),h(D,"id","object-detection"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#object-detection"),h(w,"class","relative group"),h(q,"href","https://albumentations.ai/docs/examples/example_bboxes/"),h(q,"rel","nofollow"),h(S,"href","https://albumentations.ai/docs/"),h(S,"rel","nofollow"),h(M,"href","https://huggingface.co/datasets/cppe-5"),h(M,"rel","nofollow"),h(Y,"href","https://albumentations.ai/docs/getting_started/bounding_boxes_augmentation/#coco"),h(Y,"rel","nofollow"),h(ms,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),et(qs.src,lt="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example.png")||h(qs,"src",lt),h(H,"class","flex justify-center"),et(Us.src,nt="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed.png")||h(Us,"src",nt),h(Q,"class","flex justify-center"),h(gs,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.set_transform"),h(as,"href","https://nbviewer.org/github/NielsRogge/Transformers-Tutorials/blob/master/YOLOS/Fine_tuning_YOLOS_for_object_detection_on_custom_dataset_%28balloon%29.ipynb"),h(as,"rel","nofollow"),et(Ys.src,ot="https://huggingface.co/datasets/nateraw/documentation-images/resolve/main/visualize_detection_example_transformed_2.png")||h(Ys,"src",ot),h(es,"class","flex justify-center")},m(s,r){a(document.head,v),i(s,Hs,r),i(s,w,r),a(w,D),a(D,js),k(R,js,null),a(w,ka),a(w,_s),a(_s,Ia),i(s,Js,r),i(s,b,r),a(b,Ca),a(b,q),a(q,Oa),a(b,Da),a(b,S),a(S,Pa),a(b,Ta),i(s,Ws,r),i(s,u,r),a(u,Aa),a(u,ys),a(ys,La),a(u,za),a(u,vs),a(vs,Ga),a(u,Ba),i(s,Ks,r),k(N,s,r),i(s,Qs,r),i(s,P,r),a(P,Ra),a(P,M),a(M,ws),a(ws,qa),a(P,Sa),i(s,Xs,r),i(s,ts,r),a(ts,Na),i(s,Zs,r),k(F,s,r),i(s,sa,r),i(s,ls,r),a(ls,Ma),i(s,aa,r),i(s,f,r),a(f,ns),a(ns,Es),a(Es,Fa),a(ns,Ua),a(f,Ya),a(f,os),a(os,$s),a($s,Va),a(os,Ha),a(f,Ja),a(f,ps),a(ps,ks),a(ks,Wa),a(ps,Ka),a(f,Qa),a(f,rs),a(rs,Is),a(Is,Xa),a(rs,Za),a(f,se),a(f,U),a(U,Cs),a(Cs,ae),a(U,ee),a(U,x),a(x,is),a(is,Os),a(Os,te),a(is,le),a(x,ne),a(x,cs),a(cs,Ds),a(Ds,oe),a(cs,pe),a(x,re),a(x,T),a(T,Ps),a(Ps,ie),a(T,ce),a(T,Y),a(Y,me),a(T,he),a(x,ge),a(x,g),a(g,Ts),a(Ts,fe),a(g,de),a(g,As),a(As,xe),a(g,be),a(g,Ls),a(Ls,ue),a(g,je),a(g,zs),a(zs,_e),a(g,ye),a(g,Gs),a(Gs,ve),a(g,we),a(g,Bs),a(Bs,Ee),a(g,$e),i(s,ea,r),i(s,j,r),a(j,ke),a(j,Rs),a(Rs,Ie),a(j,Ce),a(j,ms),a(ms,Oe),a(j,De),i(s,ta,r),k(V,s,r),i(s,la,r),i(s,H,r),a(H,qs),i(s,na,r),i(s,_,r),a(_,Pe),a(_,Ss),a(Ss,Te),a(_,Ae),a(_,Ns),a(Ns,Le),a(_,ze),i(s,oa,r),i(s,J,r),a(J,Ms),a(Ms,Ge),a(J,Be),i(s,pa,r),k(W,s,r),i(s,ra,r),i(s,A,r),a(A,Re),a(A,Fs),a(Fs,qe),a(A,Se),i(s,ia,r),k(K,s,r),i(s,ca,r),i(s,Q,r),a(Q,Us),i(s,ma,r),i(s,hs,r),a(hs,Ne),i(s,ha,r),k(X,s,r),i(s,ga,r),i(s,L,r),a(L,Me),a(L,gs),a(gs,Fe),a(L,Ue),i(s,fa,r),k(Z,s,r),i(s,da,r),i(s,fs,r),a(fs,Ye),i(s,xa,r),k(ss,s,r),i(s,ba,r),i(s,z,r),a(z,Ve),a(z,as),a(as,He),a(z,Je),i(s,ua,r),i(s,es,r),a(es,Ys),ja=!0},p:Kt,i(s){ja||(I(R.$$.fragment,s),I(N.$$.fragment,s),I(F.$$.fragment,s),I(V.$$.fragment,s),I(W.$$.fragment,s),I(K.$$.fragment,s),I(X.$$.fragment,s),I(Z.$$.fragment,s),I(ss.$$.fragment,s),ja=!0)},o(s){C(R.$$.fragment,s),C(N.$$.fragment,s),C(F.$$.fragment,s),C(V.$$.fragment,s),C(W.$$.fragment,s),C(K.$$.fragment,s),C(X.$$.fragment,s),C(Z.$$.fragment,s),C(ss.$$.fragment,s),ja=!1},d(s){e(v),s&&e(Hs),s&&e(w),O(R),s&&e(Js),s&&e(b),s&&e(Ws),s&&e(u),s&&e(Ks),O(N,s),s&&e(Qs),s&&e(P),s&&e(Xs),s&&e(ts),s&&e(Zs),O(F,s),s&&e(sa),s&&e(ls),s&&e(aa),s&&e(f),s&&e(ea),s&&e(j),s&&e(ta),O(V,s),s&&e(la),s&&e(H),s&&e(na),s&&e(_),s&&e(oa),s&&e(J),s&&e(pa),O(W,s),s&&e(ra),s&&e(A),s&&e(ia),O(K,s),s&&e(ca),s&&e(Q),s&&e(ma),s&&e(hs),s&&e(ha),O(X,s),s&&e(ga),s&&e(L),s&&e(fa),O(Z,s),s&&e(da),s&&e(fs),s&&e(xa),O(ss,s),s&&e(ba),s&&e(z),s&&e(ua),s&&e(es)}}}const sl={local:"object-detection",title:"Object detection"};function al(tt){return Qt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nl extends Vt{constructor(v){super();Ht(this,v,al,Zt,Jt,{})}}export{nl as default,sl as metadata};
