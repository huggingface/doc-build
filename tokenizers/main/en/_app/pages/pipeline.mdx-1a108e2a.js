import{S as el,i as tl,s as sl,e as d,k as j,w as c,t as g,M as nl,c as _,d as o,m as q,a as k,x as u,h as w,b as P,F as a,g as z,y as f,q as $,o as m,B as h,v as rl,L as b}from"../chunks/vendor-0d3f0756.js";import{I as He}from"../chunks/IconCopyLink-9193371d.js";import{C as v}from"../chunks/CodeBlock-7b0cb15c.js";import{T,M as y}from"../chunks/TokenizersLanguageContent-ca787841.js";function ol(l){let t,s;return t=new v({props:{code:`from tokenizers import Tokenizer
tokenizer = Tokenizer.from_file("data/tokenizer-wiki.json")`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
tokenizer = Tokenizer.from_file(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function al(l){let t,s;return t=new y({props:{$$slots:{default:[ol]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ll(l){let t,s;return t=new v({props:{code:`use tokenizers::Tokenizer;
let mut tokenizer = Tokenizer::from_file("data/tokenizer-wiki.json")?;`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::Tokenizer;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">tokenizer</span> = Tokenizer::<span class="hljs-title function_ invoke__">from_file</span>(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>)?;`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function il(l){let t,s;return t=new y({props:{$$slots:{default:[ll]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function pl(l){let t,s;return t=new v({props:{code:`let { Tokenizer } = require("tokenizers/bindings/tokenizer");
let tokenizer = Tokenizer.fromFile("data/tokenizer-wiki.json");`,highlighted:`<span class="hljs-keyword">let</span> { <span class="hljs-title class_">Tokenizer</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/tokenizer&quot;</span>);
<span class="hljs-keyword">let</span> tokenizer = <span class="hljs-title class_">Tokenizer</span>.<span class="hljs-title function_">fromFile</span>(<span class="hljs-string">&quot;data/tokenizer-wiki.json&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function cl(l){let t,s;return t=new y({props:{$$slots:{default:[pl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ul(l){let t,s;return t=new v({props:{code:`from tokenizers import normalizers
from tokenizers.normalizers import NFD, StripAccents
normalizer = normalizers.Sequence([NFD(), StripAccents()])`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> normalizers
<span class="hljs-keyword">from</span> tokenizers.normalizers <span class="hljs-keyword">import</span> NFD, StripAccents
normalizer = normalizers.<span class="hljs-type">Sequence</span>([NFD(), StripAccents()])`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function fl(l){let t,s;return t=new y({props:{$$slots:{default:[ul]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function $l(l){let t,s;return t=new v({props:{code:`use tokenizers::normalizers::{
    strip::StripAccents, unicode::NFD, utils::Sequence as NormalizerSequence,
};
let normalizer = NormalizerSequence::new(vec![NFD.into(), StripAccents.into()]);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::normalizers::{
    strip::StripAccents, unicode::NFD, utils::Sequence <span class="hljs-keyword">as</span> NormalizerSequence,
};
<span class="hljs-keyword">let</span> <span class="hljs-variable">normalizer</span> = NormalizerSequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[NFD.<span class="hljs-title function_ invoke__">into</span>(), StripAccents.<span class="hljs-title function_ invoke__">into</span>()]);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ml(l){let t,s;return t=new y({props:{$$slots:{default:[$l]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function hl(l){let t,s;return t=new v({props:{code:`let { sequenceNormalizer, nfdNormalizer, stripAccentsNormalizer } = require("tokenizers/bindings/normalizers");
let normalizer = sequenceNormalizer([nfdNormalizer(), stripAccentsNormalizer()]);`,highlighted:`<span class="hljs-keyword">let</span> { sequenceNormalizer, nfdNormalizer, stripAccentsNormalizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/normalizers&quot;</span>);
<span class="hljs-keyword">let</span> normalizer = <span class="hljs-title function_">sequenceNormalizer</span>([<span class="hljs-title function_">nfdNormalizer</span>(), <span class="hljs-title function_">stripAccentsNormalizer</span>()]);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function dl(l){let t,s;return t=new y({props:{$$slots:{default:[hl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function _l(l){let t,s;return t=new v({props:{code:`normalizer.normalize_str("H\xE9ll\xF2 h\xF4w are \xFC?")
# "Hello how are u?"`,highlighted:`normalizer.normalize_str(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>)
<span class="hljs-comment"># &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function kl(l){let t,s;return t=new y({props:{$$slots:{default:[_l]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function gl(l){let t,s;return t=new v({props:{code:`use tokenizers::{NormalizedString, Normalizer};
let mut normalized = NormalizedString::from("H\xE9ll\xF2 h\xF4w are \xFC?");
normalizer.normalize(&mut normalized)?;
println!("{}", normalized.get());
// "Hello how are u?"`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::{NormalizedString, Normalizer};
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">normalized</span> = NormalizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>);
normalizer.<span class="hljs-title function_ invoke__">normalize</span>(&amp;<span class="hljs-keyword">mut</span> normalized)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, normalized.<span class="hljs-title function_ invoke__">get</span>());
<span class="hljs-comment">// &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function wl(l){let t,s;return t=new y({props:{$$slots:{default:[gl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function zl(l){let t,s;return t=new v({props:{code:`let normalized = normalizer.normalizeString("H\xE9ll\xF2 h\xF4w are \xFC?")
// "Hello how are u?"`,highlighted:`<span class="hljs-keyword">let</span> normalized = normalizer.<span class="hljs-title function_">normalizeString</span>(<span class="hljs-string">&quot;H\xE9ll\xF2 h\xF4w are \xFC?&quot;</span>)
<span class="hljs-comment">// &quot;Hello how are u?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function jl(l){let t,s;return t=new y({props:{$$slots:{default:[zl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ql(l){let t,s;return t=new v({props:{code:"tokenizer.normalizer = normalizer",highlighted:"tokenizer.normalizer = normalizer"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function bl(l){let t,s;return t=new y({props:{$$slots:{default:[ql]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function vl(l){let t,s;return t=new v({props:{code:"tokenizer.with_normalizer(normalizer);",highlighted:'tokenizer.<span class="hljs-title function_ invoke__">with_normalizer</span>(normalizer);'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function yl(l){let t,s;return t=new y({props:{$$slots:{default:[vl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Pl(l){let t,s;return t=new v({props:{code:"tokenizer.setNormalizer(normalizer)",highlighted:'tokenizer.<span class="hljs-title function_">setNormalizer</span>(normalizer)'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Tl(l){let t,s;return t=new y({props:{$$slots:{default:[Pl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function El(l){let t,s;return t=new v({props:{code:`from tokenizers.pre_tokenizers import Whitespace
pre_tokenizer = Whitespace()
pre_tokenizer.pre_tokenize_str("Hello! How are you? I'm fine, thank you.")
# [("Hello", (0, 5)), ("!", (5, 6)), ("How", (7, 10)), ("are", (11, 14)), ("you", (15, 18)),
#  ("?", (18, 19)), ("I", (20, 21)), ("'", (21, 22)), ('m', (22, 23)), ("fine", (24, 28)),
#  (",", (28, 29)), ("thank", (30, 35)), ("you", (36, 39)), (".", (39, 40))]`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace
pre_tokenizer = Whitespace()
pre_tokenizer.pre_tokenize_str(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>)
<span class="hljs-comment"># [(&quot;Hello&quot;, (0, 5)), (&quot;!&quot;, (5, 6)), (&quot;How&quot;, (7, 10)), (&quot;are&quot;, (11, 14)), (&quot;you&quot;, (15, 18)),</span>
<span class="hljs-comment">#  (&quot;?&quot;, (18, 19)), (&quot;I&quot;, (20, 21)), (&quot;&#x27;&quot;, (21, 22)), (&#x27;m&#x27;, (22, 23)), (&quot;fine&quot;, (24, 28)),</span>
<span class="hljs-comment">#  (&quot;,&quot;, (28, 29)), (&quot;thank&quot;, (30, 35)), (&quot;you&quot;, (36, 39)), (&quot;.&quot;, (39, 40))]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Sl(l){let t,s;return t=new y({props:{$$slots:{default:[El]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Nl(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::whitespace::Whitespace;
use tokenizers::{OffsetReferential, OffsetType, PreTokenizedString, PreTokenizer};
let pre_tokenizer = Whitespace::default();
let mut pre_tokenized = PreTokenizedString::from("Hello! How are you? I'm fine, thank you.");
pre_tokenizer.pre_tokenize(&mut pre_tokenized)?;
println!(
    "{:?}",
    pre_tokenized.get_splits(OffsetReferential::Original, OffsetType::Byte)
);
// [("Hello", (0, 5), None), ("!", (5, 6), None), ("How", (7, 10), None),
//  ("are", (11, 14), None), ("you", (15, 18), None), ("?", (18, 19), None),
//  ("I", (20, 21), None), ("\\'", (21, 22), None), ("m", (22, 23), None),
//  ("fine", (24, 28), None), (",", (28, 29), None), ("thank", (30, 35), None),
//  ("you", (36, 39), None), (".", (39, 40), None)]`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::whitespace::Whitespace;
<span class="hljs-keyword">use</span> tokenizers::{OffsetReferential, OffsetType, PreTokenizedString, PreTokenizer};
<span class="hljs-keyword">let</span> <span class="hljs-variable">pre_tokenizer</span> = Whitespace::<span class="hljs-title function_ invoke__">default</span>();
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">pre_tokenized</span> = PreTokenizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>);
pre_tokenizer.<span class="hljs-title function_ invoke__">pre_tokenize</span>(&amp;<span class="hljs-keyword">mut</span> pre_tokenized)?;
<span class="hljs-built_in">println!</span>(
    <span class="hljs-string">&quot;{:?}&quot;</span>,
    pre_tokenized.<span class="hljs-title function_ invoke__">get_splits</span>(OffsetReferential::Original, OffsetType::Byte)
);
<span class="hljs-comment">// [(&quot;Hello&quot;, (0, 5), None), (&quot;!&quot;, (5, 6), None), (&quot;How&quot;, (7, 10), None),</span>
<span class="hljs-comment">//  (&quot;are&quot;, (11, 14), None), (&quot;you&quot;, (15, 18), None), (&quot;?&quot;, (18, 19), None),</span>
<span class="hljs-comment">//  (&quot;I&quot;, (20, 21), None), (&quot;\\&#x27;&quot;, (21, 22), None), (&quot;m&quot;, (22, 23), None),</span>
<span class="hljs-comment">//  (&quot;fine&quot;, (24, 28), None), (&quot;,&quot;, (28, 29), None), (&quot;thank&quot;, (30, 35), None),</span>
<span class="hljs-comment">//  (&quot;you&quot;, (36, 39), None), (&quot;.&quot;, (39, 40), None)]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Al(l){let t,s;return t=new y({props:{$$slots:{default:[Nl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Cl(l){let t,s;return t=new v({props:{code:`let { whitespacePreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
var preTokenizer = whitespacePreTokenizer();
var preTokenized = preTokenizer.preTokenizeString("Hello! How are you? I'm fine, thank you.");`,highlighted:`<span class="hljs-keyword">let</span> { whitespacePreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
<span class="hljs-keyword">var</span> preTokenizer = <span class="hljs-title function_">whitespacePreTokenizer</span>();
<span class="hljs-keyword">var</span> preTokenized = preTokenizer.<span class="hljs-title function_">preTokenizeString</span>(<span class="hljs-string">&quot;Hello! How are you? I&#x27;m fine, thank you.&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Dl(l){let t,s;return t=new y({props:{$$slots:{default:[Cl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function xl(l){let t,s;return t=new v({props:{code:`from tokenizers import pre_tokenizers
from tokenizers.pre_tokenizers import Digits
pre_tokenizer = pre_tokenizers.Sequence([Whitespace(), Digits(individual_digits=True)])
pre_tokenizer.pre_tokenize_str("Call 911!")
# [("Call", (0, 4)), ("9", (5, 6)), ("1", (6, 7)), ("1", (7, 8)), ("!", (8, 9))]`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> pre_tokenizers
<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Digits
pre_tokenizer = pre_tokenizers.<span class="hljs-type">Sequence</span>([Whitespace(), Digits(individual_digits=<span class="hljs-literal">True</span>)])
pre_tokenizer.pre_tokenize_str(<span class="hljs-string">&quot;Call 911!&quot;</span>)
<span class="hljs-comment"># [(&quot;Call&quot;, (0, 4)), (&quot;9&quot;, (5, 6)), (&quot;1&quot;, (6, 7)), (&quot;1&quot;, (7, 8)), (&quot;!&quot;, (8, 9))]</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Wl(l){let t,s;return t=new y({props:{$$slots:{default:[xl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ll(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::{digits::Digits, sequence::Sequence};
let pre_tokenizer = Sequence::new(vec![Whitespace::default().into(), Digits::new(true).into()]);
let mut pre_tokenized = PreTokenizedString::from("Call 911!");
pre_tokenizer.pre_tokenize(&mut pre_tokenized)?;
println!(
    "{:?}",
    pre_tokenized.get_splits(OffsetReferential::Original, OffsetType::Byte)
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::{digits::Digits, sequence::Sequence};
<span class="hljs-keyword">let</span> <span class="hljs-variable">pre_tokenizer</span> = Sequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[Whitespace::<span class="hljs-title function_ invoke__">default</span>().<span class="hljs-title function_ invoke__">into</span>(), Digits::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-literal">true</span>).<span class="hljs-title function_ invoke__">into</span>()]);
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">pre_tokenized</span> = PreTokenizedString::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Call 911!&quot;</span>);
pre_tokenizer.<span class="hljs-title function_ invoke__">pre_tokenize</span>(&amp;<span class="hljs-keyword">mut</span> pre_tokenized)?;
<span class="hljs-built_in">println!</span>(
    <span class="hljs-string">&quot;{:?}&quot;</span>,
    pre_tokenized.<span class="hljs-title function_ invoke__">get_splits</span>(OffsetReferential::Original, OffsetType::Byte)
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Hl(l){let t,s;return t=new y({props:{$$slots:{default:[Ll]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ol(l){let t,s;return t=new v({props:{code:`let { sequencePreTokenizer, digitsPreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
var preTokenizer = sequencePreTokenizer([whitespacePreTokenizer(), digitsPreTokenizer(true)]);
var preTokenized = preTokenizer.preTokenizeString("Call 911!");`,highlighted:`<span class="hljs-keyword">let</span> { sequencePreTokenizer, digitsPreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
<span class="hljs-keyword">var</span> preTokenizer = <span class="hljs-title function_">sequencePreTokenizer</span>([<span class="hljs-title function_">whitespacePreTokenizer</span>(), <span class="hljs-title function_">digitsPreTokenizer</span>(<span class="hljs-literal">true</span>)]);
<span class="hljs-keyword">var</span> preTokenized = preTokenizer.<span class="hljs-title function_">preTokenizeString</span>(<span class="hljs-string">&quot;Call 911!&quot;</span>);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Il(l){let t,s;return t=new y({props:{$$slots:{default:[Ol]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Bl(l){let t,s;return t=new v({props:{code:"tokenizer.pre_tokenizer = pre_tokenizer",highlighted:"tokenizer.pre_tokenizer = pre_tokenizer"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Fl(l){let t,s;return t=new y({props:{$$slots:{default:[Bl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ul(l){let t,s;return t=new v({props:{code:"tokenizer.with_pre_tokenizer(pre_tokenizer);",highlighted:'tokenizer.<span class="hljs-title function_ invoke__">with_pre_tokenizer</span>(pre_tokenizer);'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Kl(l){let t,s;return t=new y({props:{$$slots:{default:[Ul]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Rl(l){let t,s;return t=new v({props:{code:"tokenizer.setPreTokenizer(preTokenizer)",highlighted:'tokenizer.<span class="hljs-title function_">setPreTokenizer</span>(preTokenizer)'}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ml(l){let t,s;return t=new y({props:{$$slots:{default:[Rl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Yl(l){let t,s;return t=new v({props:{code:`from tokenizers.processors import TemplateProcessing
tokenizer.post_processor = TemplateProcessing(
    single="[CLS] $A [SEP]",
    pair="[CLS] $A [SEP] $B:1 [SEP]:1",
    special_tokens=[("[CLS]", 1), ("[SEP]", 2)],
)`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.processors <span class="hljs-keyword">import</span> TemplateProcessing
tokenizer.post_processor = TemplateProcessing(
    single=<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    pair=<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    special_tokens=[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)],
)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Jl(l){let t,s;return t=new y({props:{$$slots:{default:[Yl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Gl(l){let t,s;return t=new v({props:{code:`use tokenizers::processors::template::TemplateProcessing;
tokenizer.with_post_processor(
    TemplateProcessing::builder()
        .try_single("[CLS] $A [SEP]")
        .unwrap()
        .try_pair("[CLS] $A [SEP] $B:1 [SEP]:1")
        .unwrap()
        .special_tokens(vec![("[CLS]", 1), ("[SEP]", 2)])
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::processors::template::TemplateProcessing;
tokenizer.<span class="hljs-title function_ invoke__">with_post_processor</span>(
    TemplateProcessing::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">try_single</span>(<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">try_pair</span>(<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)])
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ql(l){let t,s;return t=new y({props:{$$slots:{default:[Gl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Vl(l){let t,s;return t=new v({props:{code:`let { templateProcessing } = require("tokenizers/bindings/post-processors");
tokenizer.setPostProcessor(templateProcessing(
    "[CLS] $A [SEP]",
    "[CLS] $A [SEP] $B:1 [SEP]:1",
    [["[CLS]", 1], ["[SEP]", 2]]
));`,highlighted:`<span class="hljs-keyword">let</span> { templateProcessing } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/post-processors&quot;</span>);
tokenizer.<span class="hljs-title function_">setPostProcessor</span>(<span class="hljs-title function_">templateProcessing</span>(
    <span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    <span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    [[<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>], [<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>]]
));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Xl(l){let t,s;return t=new y({props:{$$slots:{default:[Vl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Zl(l){let t,s;return t=new v({props:{code:`from tokenizers import Tokenizer
from tokenizers.models import WordPiece
bert_tokenizer = Tokenizer(WordPiece(unk_token="[UNK]"))`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
<span class="hljs-keyword">from</span> tokenizers.models <span class="hljs-keyword">import</span> WordPiece
bert_tokenizer = Tokenizer(WordPiece(unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>))`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ei(l){let t,s;return t=new y({props:{$$slots:{default:[Zl]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ti(l){let t,s;return t=new v({props:{code:`use tokenizers::models::wordpiece::WordPiece;
use tokenizers::Tokenizer;
let mut bert_tokenizer = Tokenizer::new(
    WordPiece::builder()
        .unk_token("[UNK]".to_string())
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::models::wordpiece::WordPiece;
<span class="hljs-keyword">use</span> tokenizers::Tokenizer;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">bert_tokenizer</span> = Tokenizer::<span class="hljs-title function_ invoke__">new</span>(
    WordPiece::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">unk_token</span>(<span class="hljs-string">&quot;[UNK]&quot;</span>.<span class="hljs-title function_ invoke__">to_string</span>())
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function si(l){let t,s;return t=new y({props:{$$slots:{default:[ti]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ni(l){let t,s;return t=new v({props:{code:`let { Tokenizer } = require("tokenizers/bindings/tokenizer");
let { WordPiece } = require("tokenizers/bindings/models");
let bertTokenizer = new Tokenizer(WordPiece.init({}, { unkToken: "[UNK]" }));`,highlighted:`<span class="hljs-keyword">let</span> { <span class="hljs-title class_">Tokenizer</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/tokenizer&quot;</span>);
<span class="hljs-keyword">let</span> { <span class="hljs-title class_">WordPiece</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/models&quot;</span>);
<span class="hljs-keyword">let</span> bertTokenizer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Tokenizer</span>(<span class="hljs-title class_">WordPiece</span>.<span class="hljs-title function_">init</span>({}, { <span class="hljs-attr">unkToken</span>: <span class="hljs-string">&quot;[UNK]&quot;</span> }));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ri(l){let t,s;return t=new y({props:{$$slots:{default:[ni]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function oi(l){let t,s;return t=new v({props:{code:`from tokenizers import normalizers
from tokenizers.normalizers import Lowercase, NFD, StripAccents
bert_tokenizer.normalizer = normalizers.Sequence([NFD(), Lowercase(), StripAccents()])`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> normalizers
<span class="hljs-keyword">from</span> tokenizers.normalizers <span class="hljs-keyword">import</span> Lowercase, NFD, StripAccents
bert_tokenizer.normalizer = normalizers.<span class="hljs-type">Sequence</span>([NFD(), Lowercase(), StripAccents()])`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ai(l){let t,s;return t=new y({props:{$$slots:{default:[oi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function li(l){let t,s;return t=new v({props:{code:`use tokenizers::normalizers::utils::Sequence as NormalizerSequence;
use tokenizers::normalizers::{strip::StripAccents, unicode::NFD, utils::Lowercase};
bert_tokenizer.with_normalizer(NormalizerSequence::new(vec![
    NFD.into(),
    Lowercase.into(),
    StripAccents.into(),
]));`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::normalizers::utils::Sequence <span class="hljs-keyword">as</span> NormalizerSequence;
<span class="hljs-keyword">use</span> tokenizers::normalizers::{strip::StripAccents, unicode::NFD, utils::Lowercase};
bert_tokenizer.<span class="hljs-title function_ invoke__">with_normalizer</span>(NormalizerSequence::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-built_in">vec!</span>[
    NFD.<span class="hljs-title function_ invoke__">into</span>(),
    Lowercase.<span class="hljs-title function_ invoke__">into</span>(),
    StripAccents.<span class="hljs-title function_ invoke__">into</span>(),
]));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ii(l){let t,s;return t=new y({props:{$$slots:{default:[li]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function pi(l){let t,s;return t=new v({props:{code:`let { sequenceNormalizer, lowercaseNormalizer, nfdNormalizer, stripAccentsNormalizer }
    = require("tokenizers/bindings/normalizers");
bertTokenizer.setNormalizer(sequenceNormalizer([
    nfdNormalizer(), lowercaseNormalizer(), stripAccentsNormalizer()
]))`,highlighted:`<span class="hljs-keyword">let</span> { sequenceNormalizer, lowercaseNormalizer, nfdNormalizer, stripAccentsNormalizer }
    = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/normalizers&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setNormalizer</span>(<span class="hljs-title function_">sequenceNormalizer</span>([
    <span class="hljs-title function_">nfdNormalizer</span>(), <span class="hljs-title function_">lowercaseNormalizer</span>(), <span class="hljs-title function_">stripAccentsNormalizer</span>()
]))`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ci(l){let t,s;return t=new y({props:{$$slots:{default:[pi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ui(l){let t,s;return t=new v({props:{code:`from tokenizers.pre_tokenizers import Whitespace
bert_tokenizer.pre_tokenizer = Whitespace()`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace
bert_tokenizer.pre_tokenizer = Whitespace()`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function fi(l){let t,s;return t=new y({props:{$$slots:{default:[ui]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function $i(l){let t,s;return t=new v({props:{code:`use tokenizers::pre_tokenizers::whitespace::Whitespace;
bert_tokenizer.with_pre_tokenizer(Whitespace::default());`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::pre_tokenizers::whitespace::Whitespace;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_pre_tokenizer</span>(Whitespace::<span class="hljs-title function_ invoke__">default</span>());`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function mi(l){let t,s;return t=new y({props:{$$slots:{default:[$i]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function hi(l){let t,s;return t=new v({props:{code:`let { whitespacePreTokenizer } = require("tokenizers/bindings/pre-tokenizers");
bertTokenizer.setPreTokenizer(whitespacePreTokenizer());`,highlighted:`<span class="hljs-keyword">let</span> { whitespacePreTokenizer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/pre-tokenizers&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setPreTokenizer</span>(<span class="hljs-title function_">whitespacePreTokenizer</span>());`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function di(l){let t,s;return t=new y({props:{$$slots:{default:[hi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function _i(l){let t,s;return t=new v({props:{code:`from tokenizers.processors import TemplateProcessing
bert_tokenizer.post_processor = TemplateProcessing(
    single="[CLS] $A [SEP]",
    pair="[CLS] $A [SEP] $B:1 [SEP]:1",
    special_tokens=[
        ("[CLS]", 1),
        ("[SEP]", 2),
    ],
)`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.processors <span class="hljs-keyword">import</span> TemplateProcessing
bert_tokenizer.post_processor = TemplateProcessing(
    single=<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    pair=<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    special_tokens=[
        (<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>),
        (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>),
    ],
)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ki(l){let t,s;return t=new y({props:{$$slots:{default:[_i]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function gi(l){let t,s;return t=new v({props:{code:`use tokenizers::processors::template::TemplateProcessing;
bert_tokenizer.with_post_processor(
    TemplateProcessing::builder()
        .try_single("[CLS] $A [SEP]")
        .unwrap()
        .try_pair("[CLS] $A [SEP] $B:1 [SEP]:1")
        .unwrap()
        .special_tokens(vec![("[CLS]", 1), ("[SEP]", 2)])
        .build()
        .unwrap(),
);`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::processors::template::TemplateProcessing;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_post_processor</span>(
    TemplateProcessing::<span class="hljs-title function_ invoke__">builder</span>()
        .<span class="hljs-title function_ invoke__">try_single</span>(<span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">try_pair</span>(<span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>)
        .<span class="hljs-title function_ invoke__">unwrap</span>()
        .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>), (<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>)])
        .<span class="hljs-title function_ invoke__">build</span>()
        .<span class="hljs-title function_ invoke__">unwrap</span>(),
);`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function wi(l){let t,s;return t=new y({props:{$$slots:{default:[gi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function zi(l){let t,s;return t=new v({props:{code:`let { templateProcessing } = require("tokenizers/bindings/post-processors");
bertTokenizer.setPostProcessor(templateProcessing(
    "[CLS] $A [SEP]",
    "[CLS] $A [SEP] $B:1 [SEP]:1",
    [["[CLS]", 1], ["[SEP]", 2]]
));`,highlighted:`<span class="hljs-keyword">let</span> { templateProcessing } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/post-processors&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setPostProcessor</span>(<span class="hljs-title function_">templateProcessing</span>(
    <span class="hljs-string">&quot;[CLS] $A [SEP]&quot;</span>,
    <span class="hljs-string">&quot;[CLS] $A [SEP] $B:1 [SEP]:1&quot;</span>,
    [[<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-number">1</span>], [<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-number">2</span>]]
));`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ji(l){let t,s;return t=new y({props:{$$slots:{default:[zi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function qi(l){let t,s;return t=new v({props:{code:`from tokenizers.trainers import WordPieceTrainer
trainer = WordPieceTrainer(
    vocab_size=30522, special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"]
)
files = [f"data/wikitext-103-raw/wiki.{split}.raw" for split in ["test", "train", "valid"]]
bert_tokenizer.train(files, trainer)
bert_tokenizer.save("data/bert-wiki.json")`,highlighted:`<span class="hljs-keyword">from</span> tokenizers.trainers <span class="hljs-keyword">import</span> WordPieceTrainer
trainer = WordPieceTrainer(
    vocab_size=<span class="hljs-number">30522</span>, special_tokens=[<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
)
files = [<span class="hljs-string">f&quot;data/wikitext-103-raw/wiki.<span class="hljs-subst">{split}</span>.raw&quot;</span> <span class="hljs-keyword">for</span> split <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;train&quot;</span>, <span class="hljs-string">&quot;valid&quot;</span>]]
bert_tokenizer.train(files, trainer)
bert_tokenizer.save(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function bi(l){let t,s;return t=new y({props:{$$slots:{default:[qi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function vi(l){let t,s;return t=new v({props:{code:`use tokenizers::models::{wordpiece::WordPieceTrainer, TrainerWrapper};
let mut trainer: TrainerWrapper = WordPieceTrainer::builder()
    .vocab_size(30_522)
    .special_tokens(vec![
        AddedToken::from("[UNK]", true),
        AddedToken::from("[CLS]", true),
        AddedToken::from("[SEP]", true),
        AddedToken::from("[PAD]", true),
        AddedToken::from("[MASK]", true),
    ])
    .build()
    .into();
let files = vec![
    "data/wikitext-103-raw/wiki.train.raw".into(),
    "data/wikitext-103-raw/wiki.test.raw".into(),
    "data/wikitext-103-raw/wiki.valid.raw".into(),
];
bert_tokenizer.train_from_files(&mut trainer, files)?;
bert_tokenizer.save("data/bert-wiki.json", false)?;`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::models::{wordpiece::WordPieceTrainer, TrainerWrapper};
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">trainer</span>: TrainerWrapper = WordPieceTrainer::<span class="hljs-title function_ invoke__">builder</span>()
    .<span class="hljs-title function_ invoke__">vocab_size</span>(<span class="hljs-number">30_522</span>)
    .<span class="hljs-title function_ invoke__">special_tokens</span>(<span class="hljs-built_in">vec!</span>[
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-literal">true</span>),
        AddedToken::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;[MASK]&quot;</span>, <span class="hljs-literal">true</span>),
    ])
    .<span class="hljs-title function_ invoke__">build</span>()
    .<span class="hljs-title function_ invoke__">into</span>();
<span class="hljs-keyword">let</span> <span class="hljs-variable">files</span> = <span class="hljs-built_in">vec!</span>[
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.train.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.test.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
    <span class="hljs-string">&quot;data/wikitext-103-raw/wiki.valid.raw&quot;</span>.<span class="hljs-title function_ invoke__">into</span>(),
];
bert_tokenizer.<span class="hljs-title function_ invoke__">train_from_files</span>(&amp;<span class="hljs-keyword">mut</span> trainer, files)?;
bert_tokenizer.<span class="hljs-title function_ invoke__">save</span>(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>, <span class="hljs-literal">false</span>)?;`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function yi(l){let t,s;return t=new y({props:{$$slots:{default:[vi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Pi(l){let t,s;return t=new v({props:{code:`let { wordPieceTrainer } = require("tokenizers/bindings/trainers");
let trainer = wordPieceTrainer({
    vocabSize: 30522,
    specialTokens: ["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"]
});
let files = ["test", "train", "valid"].map(split => \`data/wikitext-103-raw/wiki.\${split}.raw\`);
bertTokenizer.train(files, trainer);
bertTokenizer.save("data/bert-wiki.json")`,highlighted:`<span class="hljs-keyword">let</span> { wordPieceTrainer } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/trainers&quot;</span>);
<span class="hljs-keyword">let</span> trainer = <span class="hljs-title function_">wordPieceTrainer</span>({
    <span class="hljs-attr">vocabSize</span>: <span class="hljs-number">30522</span>,
    <span class="hljs-attr">specialTokens</span>: [<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
});
<span class="hljs-keyword">let</span> files = [<span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;train&quot;</span>, <span class="hljs-string">&quot;valid&quot;</span>].<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">split</span> =&gt;</span> <span class="hljs-string">\`data/wikitext-103-raw/wiki.<span class="hljs-subst">\${split}</span>.raw\`</span>);
bertTokenizer.<span class="hljs-title function_">train</span>(files, trainer);
bertTokenizer.<span class="hljs-title function_">save</span>(<span class="hljs-string">&quot;data/bert-wiki.json&quot;</span>)`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ti(l){let t,s;return t=new y({props:{$$slots:{default:[Pi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ei(l){let t,s;return t=new v({props:{code:`output = tokenizer.encode("Hello, y'all! How are you \u{1F601} ?")
print(output.ids)
# [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
tokenizer.decode([1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2])
# "Hello , y ' all ! How are you ?"`,highlighted:`output = tokenizer.encode(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>)
<span class="hljs-built_in">print</span>(output.ids)
<span class="hljs-comment"># [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
tokenizer.decode([<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>])
<span class="hljs-comment"># &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Si(l){let t,s;return t=new y({props:{$$slots:{default:[Ei]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ni(l){let t,s;return t=new v({props:{code:`let output = tokenizer.encode("Hello, y'all! How are you \u{1F601} ?", true)?;
println!("{:?}", output.get_ids());
// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
let decoded = tokenizer.decode(
    vec![1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2],
    true,
)?;
println!("{}", decoded);
// "Hello , y ' all ! How are you ?"`,highlighted:`<span class="hljs-keyword">let</span> <span class="hljs-variable">output</span> = tokenizer.<span class="hljs-title function_ invoke__">encode</span>(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>, <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, output.<span class="hljs-title function_ invoke__">get_ids</span>());
<span class="hljs-comment">// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = tokenizer.<span class="hljs-title function_ invoke__">decode</span>(
    <span class="hljs-built_in">vec!</span>[<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>],
    <span class="hljs-literal">true</span>,
)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, decoded);
<span class="hljs-comment">// &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ai(l){let t,s;return t=new y({props:{$$slots:{default:[Ni]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ci(l){let t,s;return t=new v({props:{code:`let { promisify } = require('util');
let encode = promisify(tokenizer.encode.bind(tokenizer));
let decode = promisify(tokenizer.decode.bind(tokenizer));
let output = await encode("Hello, y'all! How are you \u{1F601} ?");
console.log(output.getIds());
// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]
let decoded = await decode([1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2], true);
// "Hello , y ' all ! How are you ?"`,highlighted:`<span class="hljs-keyword">let</span> { promisify } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;util&#x27;</span>);
<span class="hljs-keyword">let</span> encode = <span class="hljs-title function_">promisify</span>(tokenizer.<span class="hljs-property">encode</span>.<span class="hljs-title function_">bind</span>(tokenizer));
<span class="hljs-keyword">let</span> decode = <span class="hljs-title function_">promisify</span>(tokenizer.<span class="hljs-property">decode</span>.<span class="hljs-title function_">bind</span>(tokenizer));
<span class="hljs-keyword">let</span> output = <span class="hljs-keyword">await</span> <span class="hljs-title function_">encode</span>(<span class="hljs-string">&quot;Hello, y&#x27;all! How are you \u{1F601} ?&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(output.<span class="hljs-title function_">getIds</span>());
<span class="hljs-comment">// [1, 27253, 16, 93, 11, 5097, 5, 7961, 5112, 6218, 0, 35, 2]</span>
<span class="hljs-keyword">let</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>([<span class="hljs-number">1</span>, <span class="hljs-number">27253</span>, <span class="hljs-number">16</span>, <span class="hljs-number">93</span>, <span class="hljs-number">11</span>, <span class="hljs-number">5097</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7961</span>, <span class="hljs-number">5112</span>, <span class="hljs-number">6218</span>, <span class="hljs-number">0</span>, <span class="hljs-number">35</span>, <span class="hljs-number">2</span>], <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;Hello , y &#x27; all ! How are you ?&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Di(l){let t,s;return t=new y({props:{$$slots:{default:[Ci]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function xi(l){let t,s;return t=new v({props:{code:`output = bert_tokenizer.encode("Welcome to the \u{1F917} Tokenizers library.")
print(output.tokens)
# ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
bert_tokenizer.decode(output.ids)
# "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`output = bert_tokenizer.encode(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>)
<span class="hljs-built_in">print</span>(output.tokens)
<span class="hljs-comment"># [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
bert_tokenizer.decode(output.ids)
<span class="hljs-comment"># &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Wi(l){let t,s;return t=new y({props:{$$slots:{default:[xi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Li(l){let t,s;return t=new v({props:{code:`let output = bert_tokenizer.encode("Welcome to the \u{1F917} Tokenizers library.", true)?;
println!("{:?}", output.get_tokens());
// ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
let decoded = bert_tokenizer.decode(output.get_ids().to_vec(), true)?;
println!("{}", decoded);
// "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`<span class="hljs-keyword">let</span> <span class="hljs-variable">output</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">encode</span>(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>, <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, output.<span class="hljs-title function_ invoke__">get_tokens</span>());
<span class="hljs-comment">// [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">decode</span>(output.<span class="hljs-title function_ invoke__">get_ids</span>().<span class="hljs-title function_ invoke__">to_vec</span>(), <span class="hljs-literal">true</span>)?;
<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, decoded);
<span class="hljs-comment">// &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Hi(l){let t,s;return t=new y({props:{$$slots:{default:[Li]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Oi(l){let t,s;return t=new v({props:{code:`let { promisify } = require("util");
let encode = promisify(bertTokenizer.encode.bind(bertTokenizer));
let decode = promisify(bertTokenizer.decode.bind(bertTokenizer));
let output = await encode("Welcome to the \u{1F917} Tokenizers library.");
console.log(output.getTokens());
// ["[CLS]", "welcome", "to", "the", "[UNK]", "tok", "##eni", "##zer", "##s", "library", ".", "[SEP]"]
var decoded = await decode(output.getIds(), true);
// "welcome to the tok ##eni ##zer ##s library ."`,highlighted:`<span class="hljs-keyword">let</span> { promisify } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;util&quot;</span>);
<span class="hljs-keyword">let</span> encode = <span class="hljs-title function_">promisify</span>(bertTokenizer.<span class="hljs-property">encode</span>.<span class="hljs-title function_">bind</span>(bertTokenizer));
<span class="hljs-keyword">let</span> decode = <span class="hljs-title function_">promisify</span>(bertTokenizer.<span class="hljs-property">decode</span>.<span class="hljs-title function_">bind</span>(bertTokenizer));
<span class="hljs-keyword">let</span> output = <span class="hljs-keyword">await</span> <span class="hljs-title function_">encode</span>(<span class="hljs-string">&quot;Welcome to the \u{1F917} Tokenizers library.&quot;</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(output.<span class="hljs-title function_">getTokens</span>());
<span class="hljs-comment">// [&quot;[CLS]&quot;, &quot;welcome&quot;, &quot;to&quot;, &quot;the&quot;, &quot;[UNK]&quot;, &quot;tok&quot;, &quot;##eni&quot;, &quot;##zer&quot;, &quot;##s&quot;, &quot;library&quot;, &quot;.&quot;, &quot;[SEP]&quot;]</span>
<span class="hljs-keyword">var</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>(output.<span class="hljs-title function_">getIds</span>(), <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;welcome to the tok ##eni ##zer ##s library .&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ii(l){let t,s;return t=new y({props:{$$slots:{default:[Oi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Bi(l){let t,s;return t=new v({props:{code:`from tokenizers import decoders
bert_tokenizer.decoder = decoders.WordPiece()
bert_tokenizer.decode(output.ids)
# "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> decoders
bert_tokenizer.decoder = decoders.WordPiece()
bert_tokenizer.decode(output.ids)
<span class="hljs-comment"># &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Fi(l){let t,s;return t=new y({props:{$$slots:{default:[Bi]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ui(l){let t,s;return t=new v({props:{code:`use tokenizers::decoders::wordpiece::WordPiece as WordPieceDecoder;
bert_tokenizer.with_decoder(WordPieceDecoder::default());
let decoded = bert_tokenizer.decode(output.get_ids().to_vec(), true)?;
// "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">use</span> tokenizers::decoders::wordpiece::WordPiece <span class="hljs-keyword">as</span> WordPieceDecoder;
bert_tokenizer.<span class="hljs-title function_ invoke__">with_decoder</span>(WordPieceDecoder::<span class="hljs-title function_ invoke__">default</span>());
<span class="hljs-keyword">let</span> <span class="hljs-variable">decoded</span> = bert_tokenizer.<span class="hljs-title function_ invoke__">decode</span>(output.<span class="hljs-title function_ invoke__">get_ids</span>().<span class="hljs-title function_ invoke__">to_vec</span>(), <span class="hljs-literal">true</span>)?;
<span class="hljs-comment">// &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ki(l){let t,s;return t=new y({props:{$$slots:{default:[Ui]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ri(l){let t,s;return t=new v({props:{code:`let { wordPieceDecoder } = require("tokenizers/bindings/decoders");
bertTokenizer.setDecoder(wordPieceDecoder());
var decoded = await decode(output.getIds(), true);
// "welcome to the tokenizers library."`,highlighted:`<span class="hljs-keyword">let</span> { wordPieceDecoder } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;tokenizers/bindings/decoders&quot;</span>);
bertTokenizer.<span class="hljs-title function_">setDecoder</span>(<span class="hljs-title function_">wordPieceDecoder</span>());
<span class="hljs-keyword">var</span> decoded = <span class="hljs-keyword">await</span> <span class="hljs-title function_">decode</span>(output.<span class="hljs-title function_">getIds</span>(), <span class="hljs-literal">true</span>);
<span class="hljs-comment">// &quot;welcome to the tokenizers library.&quot;</span>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p:b,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Mi(l){let t,s;return t=new y({props:{$$slots:{default:[Ri]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){f(t,e,r),s=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){m(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Yi(l){let t,s,e,r,i,Te,xn,st,Wn,_s,D,Ln,nt,Hn,On,rt,In,Bn,ks,E,ot,at,Fn,Un,lt,it,Kn,Rn,pt,ct,Mn,Yn,ut,ft,Jn,gs,x,Gn,$t,Qn,Vn,mt,Xn,Zn,ws,W,er,ht,tr,sr,dt,nr,rr,zs,Y,js,I,J,_t,Ee,or,kt,ar,qs,G,lr,Se,ir,pr,bs,L,cr,gt,ur,fr,wt,$r,mr,vs,Q,ys,Oe,hr,Ps,V,Ts,X,dr,zt,_r,kr,Es,Z,Ss,Ie,gr,Ns,B,ee,jt,Ne,wr,qt,zr,As,Be,jr,Cs,te,qr,bt,br,vr,Ds,se,xs,S,yr,vt,Pr,Tr,yt,Er,Sr,Pt,Nr,Ar,Ws,ne,Cr,Tt,Dr,xr,Ls,re,Hs,H,Wr,Et,Lr,Hr,St,Or,Ir,Os,oe,Is,Fe,Br,Bs,F,ae,Nt,Ae,Fr,At,Ur,Fs,le,Kr,Ct,Rr,Mr,Us,Ue,Yr,Ks,ie,Jr,Dt,Gr,Qr,Rs,N,xt,Wt,Vr,Xr,Lt,Ht,Zr,eo,Ot,It,to,so,Bt,Ft,no,Ms,Ce,ro,Ke,oo,Ys,U,pe,Ut,De,ao,Kt,lo,Js,ce,io,Rt,po,co,Gs,ue,uo,Mt,fo,$o,Qs,fe,Vs,Re,mo,Xs,K,$e,Yt,xe,ho,Jt,_o,Zs,me,ko,Gt,go,wo,en,he,tn,Me,zo,sn,de,nn,Ye,jo,rn,_e,on,Je,qo,an,ke,ln,ge,bo,Qt,vo,yo,pn,we,cn,R,ze,Vt,We,Po,Xt,To,un,A,Eo,Zt,So,No,es,Ao,Co,ts,Do,xo,fn,Ge,Wo,$n,je,mn,O,Lo,ss,Ho,Oo,ns,Io,Bo,hn,qe,dn,Qe,Fo,_n,be,kn;return Te=new He({}),Y=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[cl],rust:[il],python:[al]},$$scope:{ctx:l}}}),Ee=new He({}),Q=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[dl],rust:[ml],python:[fl]},$$scope:{ctx:l}}}),V=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[jl],rust:[wl],python:[kl]},$$scope:{ctx:l}}}),Z=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Tl],rust:[yl],python:[bl]},$$scope:{ctx:l}}}),Ne=new He({}),se=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Dl],rust:[Al],python:[Sl]},$$scope:{ctx:l}}}),re=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Il],rust:[Hl],python:[Wl]},$$scope:{ctx:l}}}),oe=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Ml],rust:[Kl],python:[Fl]},$$scope:{ctx:l}}}),Ae=new He({}),De=new He({}),fe=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Xl],rust:[Ql],python:[Jl]},$$scope:{ctx:l}}}),xe=new He({}),he=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ri],rust:[si],python:[ei]},$$scope:{ctx:l}}}),de=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ci],rust:[ii],python:[ai]},$$scope:{ctx:l}}}),_e=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[di],rust:[mi],python:[fi]},$$scope:{ctx:l}}}),ke=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[ji],rust:[wi],python:[ki]},$$scope:{ctx:l}}}),we=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Ti],rust:[yi],python:[bi]},$$scope:{ctx:l}}}),We=new He({}),je=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Di],rust:[Ai],python:[Si]},$$scope:{ctx:l}}}),qe=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Ii],rust:[Hi],python:[Wi]},$$scope:{ctx:l}}}),be=new T({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Mi],rust:[Ki],python:[Fi]},$$scope:{ctx:l}}}),{c(){t=d("meta"),s=j(),e=d("h1"),r=d("a"),i=d("span"),c(Te.$$.fragment),xn=j(),st=d("span"),Wn=g("The tokenization pipeline"),_s=j(),D=d("p"),Ln=g("When calling "),nt=d("code"),Hn=g("Tokenizer.encode"),On=g(` or
`),rt=d("code"),In=g("Tokenizer.encode_batch"),Bn=g(`, the input
text(s) go through the following pipeline:`),ks=j(),E=d("ul"),ot=d("li"),at=d("code"),Fn=g("normalization"),Un=j(),lt=d("li"),it=d("code"),Kn=g("pre-tokenization"),Rn=j(),pt=d("li"),ct=d("code"),Mn=g("model"),Yn=j(),ut=d("li"),ft=d("code"),Jn=g("post-processing"),gs=j(),x=d("p"),Gn=g(`We\u2019ll see in details what happens during each of those steps in detail,
as well as when you want to `),$t=d("code"),Qn=g("decode <decoding>"),Vn=g(` some token ids, and how the \u{1F917} Tokenizers library allows you
to customize each of those steps to your needs. If you\u2019re already
familiar with those steps and want to learn by seeing some code, jump to
`),mt=d("code"),Xn=g("our BERT from scratch example <example>"),Zn=g("."),ws=j(),W=d("p"),er=g("For the examples that require a "),ht=d("code"),tr=g("Tokenizer"),sr=g(` we will use the tokenizer we trained in the
`),dt=d("code"),nr=g("quicktour"),rr=g(", which you can load with:"),zs=j(),c(Y.$$.fragment),js=j(),I=d("h2"),J=d("a"),_t=d("span"),c(Ee.$$.fragment),or=j(),kt=d("span"),ar=g("Normalization"),qs=j(),G=d("p"),lr=g(`Normalization is, in a nutshell, a set of operations you apply to a raw
string to make it less random or \u201Ccleaner\u201D. Common operations include
stripping whitespace, removing accented characters or lowercasing all
text. If you\u2019re familiar with `),Se=d("a"),ir=g(`Unicode
normalization`),pr=g(`, it is also a very
common normalization operation applied in most tokenizers.`),bs=j(),L=d("p"),cr=g(`Each normalization operation is represented in the \u{1F917} Tokenizers library
by a `),gt=d("code"),ur=g("Normalizer"),fr=g(`, and you can combine
several of those by using a `),wt=d("code"),$r=g("normalizers.Sequence"),mr=g(`. Here is a normalizer applying NFD Unicode normalization
and removing accents as an example:`),vs=j(),c(Q.$$.fragment),ys=j(),Oe=d("p"),hr=g("You can manually test that normalizer by applying it to any string:"),Ps=j(),c(V.$$.fragment),Ts=j(),X=d("p"),dr=g("When building a "),zt=d("code"),_r=g("Tokenizer"),kr=g(`, you can
customize its normalizer by just changing the corresponding attribute:`),Es=j(),c(Z.$$.fragment),Ss=j(),Ie=d("p"),gr=g(`Of course, if you change the way a tokenizer applies normalization, you
should probably retrain it from scratch afterward.`),Ns=j(),B=d("h2"),ee=d("a"),jt=d("span"),c(Ne.$$.fragment),wr=j(),qt=d("span"),zr=g("Pre-Tokenization"),As=j(),Be=d("p"),jr=g(`Pre-tokenization is the act of splitting a text into smaller objects
that give an upper bound to what your tokens will be at the end of
training. A good way to think of this is that the pre-tokenizer will
split your text into \u201Cwords\u201D and then, your final tokens will be parts
of those words.`),Cs=j(),te=d("p"),qr=g(`An easy way to pre-tokenize inputs is to split on spaces and
punctuations, which is done by the
`),bt=d("code"),br=g("pre_tokenizers.Whitespace"),vr=g(`
pre-tokenizer:`),Ds=j(),c(se.$$.fragment),xs=j(),S=d("p"),yr=g(`The output is a list of tuples, with each tuple containing one word and
its span in the original sentence (which is used to determine the final
`),vt=d("code"),Pr=g("offsets"),Tr=g(" of our "),yt=d("code"),Er=g("Encoding"),Sr=g(`). Note that splitting on
punctuation will split contractions like `),Pt=d("code"),Nr=g(`"I'm"`),Ar=g(" in this example."),Ws=j(),ne=d("p"),Cr=g("You can combine together any "),Tt=d("code"),Dr=g("PreTokenizer"),xr=g(` together. For instance, here is a pre-tokenizer that will
split on space, punctuation and digits, separating numbers in their
individual digits:`),Ls=j(),c(re.$$.fragment),Hs=j(),H=d("p"),Wr=g("As we saw in the "),Et=d("code"),Lr=g("quicktour"),Hr=g(`, you can
customize the pre-tokenizer of a `),St=d("code"),Or=g("Tokenizer"),Ir=g(" by just changing the corresponding attribute:"),Os=j(),c(oe.$$.fragment),Is=j(),Fe=d("p"),Br=g(`Of course, if you change the way the pre-tokenizer, you should probably
retrain your tokenizer from scratch afterward.`),Bs=j(),F=d("h2"),ae=d("a"),Nt=d("span"),c(Ae.$$.fragment),Fr=j(),At=d("span"),Ur=g("Model"),Fs=j(),le=d("p"),Kr=g(`Once the input texts are normalized and pre-tokenized, the
`),Ct=d("code"),Rr=g("Tokenizer"),Mr=g(` applies the model on the
pre-tokens. This is the part of the pipeline that needs training on your
corpus (or that has been trained if you are using a pretrained
tokenizer).`),Us=j(),Ue=d("p"),Yr=g(`The role of the model is to split your \u201Cwords\u201D into tokens, using the
rules it has learned. It\u2019s also responsible for mapping those tokens to
their corresponding IDs in the vocabulary of the model.`),Ks=j(),ie=d("p"),Jr=g(`This model is passed along when intializing the
`),Dt=d("code"),Gr=g("Tokenizer"),Qr=g(` so you already know how to
customize this part. Currently, the \u{1F917} Tokenizers library supports:`),Rs=j(),N=d("ul"),xt=d("li"),Wt=d("code"),Vr=g("models.BPE"),Xr=j(),Lt=d("li"),Ht=d("code"),Zr=g("models.Unigram"),eo=j(),Ot=d("li"),It=d("code"),to=g("models.WordLevel"),so=j(),Bt=d("li"),Ft=d("code"),no=g("models.WordPiece"),Ms=j(),Ce=d("p"),ro=g(`For more details about each model and its behavior, you can check
`),Ke=d("a"),oo=g("here"),Ys=j(),U=d("h2"),pe=d("a"),Ut=d("span"),c(De.$$.fragment),ao=j(),Kt=d("span"),lo=g("Post-Processing"),Js=j(),ce=d("p"),io=g(`Post-processing is the last step of the tokenization pipeline, to
perform any additional transformation to the
`),Rt=d("code"),po=g("Encoding"),co=g(` before it\u2019s returned, like
adding potential special tokens.`),Gs=j(),ue=d("p"),uo=g(`As we saw in the quick tour, we can customize the post processor of a
`),Mt=d("code"),fo=g("Tokenizer"),$o=g(` by setting the
corresponding attribute. For instance, here is how we can post-process
to make the inputs suitable for the BERT model:`),Qs=j(),c(fe.$$.fragment),Vs=j(),Re=d("p"),mo=g(`Note that contrarily to the pre-tokenizer or the normalizer, you don\u2019t
need to retrain a tokenizer after changing its post-processor.`),Xs=j(),K=d("h2"),$e=d("a"),Yt=d("span"),c(xe.$$.fragment),ho=j(),Jt=d("span"),_o=g("All together: a BERT tokenizer from scratch"),Zs=j(),me=d("p"),ko=g(`Let\u2019s put all those pieces together to build a BERT tokenizer. First,
BERT relies on WordPiece, so we instantiate a new
`),Gt=d("code"),go=g("Tokenizer"),wo=g(" with this model:"),en=j(),c(he.$$.fragment),tn=j(),Me=d("p"),zo=g(`Then we know that BERT preprocesses texts by removing accents and
lowercasing. We also use a unicode normalizer:`),sn=j(),c(de.$$.fragment),nn=j(),Ye=d("p"),jo=g("The pre-tokenizer is just splitting on whitespace and punctuation:"),rn=j(),c(_e.$$.fragment),on=j(),Je=d("p"),qo=g(`And the post-processing uses the template we saw in the previous
section:`),an=j(),c(ke.$$.fragment),ln=j(),ge=d("p"),bo=g(`We can use this tokenizer and train on it on wikitext like in the
`),Qt=d("code"),vo=g("quicktour"),yo=g(":"),pn=j(),c(we.$$.fragment),cn=j(),R=d("h2"),ze=d("a"),Vt=d("span"),c(We.$$.fragment),Po=j(),Xt=d("span"),To=g("Decoding"),un=j(),A=d("p"),Eo=g("On top of encoding the input texts, a "),Zt=d("code"),So=g("Tokenizer"),No=g(` also has an API for decoding, that is converting IDs
generated by your model back to a text. This is done by the methods
`),es=d("code"),Ao=g("Tokenizer.decode"),Co=g(" (for one predicted text) and "),ts=d("code"),Do=g("Tokenizer.decode_batch"),xo=g(" (for a batch of predictions)."),fn=j(),Ge=d("p"),Wo=g(`The [decoder]{.title-ref} will first convert the IDs back to tokens
(using the tokenizer\u2019s vocabulary) and remove all special tokens, then
join those tokens with spaces:`),$n=j(),c(je.$$.fragment),mn=j(),O=d("p"),Lo=g(`If you used a model that added special characters to represent subtokens
of a given \u201Cword\u201D (like the `),ss=d("code"),Ho=g('"##"'),Oo=g(` in
WordPiece) you will need to customize the [decoder]{.title-ref} to treat
them properly. If we take our previous `),ns=d("code"),Io=g("bert_tokenizer"),Bo=g(` for instance the
default decoing will give:`),hn=j(),c(qe.$$.fragment),dn=j(),Qe=d("p"),Fo=g("But by changing it to a proper decoder, we get:"),_n=j(),c(be.$$.fragment),this.h()},l(n){const p=nl('[data-svelte="svelte-1phssyn"]',document.head);t=_(p,"META",{name:!0,content:!0}),p.forEach(o),s=q(n),e=_(n,"H1",{class:!0});var Le=k(e);r=_(Le,"A",{id:!0,class:!0,href:!0});var rs=k(r);i=_(rs,"SPAN",{});var os=k(i);u(Te.$$.fragment,os),os.forEach(o),rs.forEach(o),xn=q(Le),st=_(Le,"SPAN",{});var as=k(st);Wn=w(as,"The tokenization pipeline"),as.forEach(o),Le.forEach(o),_s=q(n),D=_(n,"P",{});var M=k(D);Ln=w(M,"When calling "),nt=_(M,"CODE",{});var ls=k(nt);Hn=w(ls,"Tokenizer.encode"),ls.forEach(o),On=w(M,` or
`),rt=_(M,"CODE",{});var is=k(rt);In=w(is,"Tokenizer.encode_batch"),is.forEach(o),Bn=w(M,`, the input
text(s) go through the following pipeline:`),M.forEach(o),ks=q(n),E=_(n,"UL",{});var C=k(E);ot=_(C,"LI",{});var ps=k(ot);at=_(ps,"CODE",{});var cs=k(at);Fn=w(cs,"normalization"),cs.forEach(o),ps.forEach(o),Un=q(C),lt=_(C,"LI",{});var us=k(lt);it=_(us,"CODE",{});var fs=k(it);Kn=w(fs,"pre-tokenization"),fs.forEach(o),us.forEach(o),Rn=q(C),pt=_(C,"LI",{});var $s=k(pt);ct=_($s,"CODE",{});var ms=k(ct);Mn=w(ms,"model"),ms.forEach(o),$s.forEach(o),Yn=q(C),ut=_(C,"LI",{});var hs=k(ut);ft=_(hs,"CODE",{});var ds=k(ft);Jn=w(ds,"post-processing"),ds.forEach(o),hs.forEach(o),C.forEach(o),gs=q(n),x=_(n,"P",{});var Ve=k(x);Gn=w(Ve,`We\u2019ll see in details what happens during each of those steps in detail,
as well as when you want to `),$t=_(Ve,"CODE",{});var Ko=k($t);Qn=w(Ko,"decode <decoding>"),Ko.forEach(o),Vn=w(Ve,` some token ids, and how the \u{1F917} Tokenizers library allows you
to customize each of those steps to your needs. If you\u2019re already
familiar with those steps and want to learn by seeing some code, jump to
`),mt=_(Ve,"CODE",{});var Ro=k(mt);Xn=w(Ro,"our BERT from scratch example <example>"),Ro.forEach(o),Zn=w(Ve,"."),Ve.forEach(o),ws=q(n),W=_(n,"P",{});var Xe=k(W);er=w(Xe,"For the examples that require a "),ht=_(Xe,"CODE",{});var Mo=k(ht);tr=w(Mo,"Tokenizer"),Mo.forEach(o),sr=w(Xe,` we will use the tokenizer we trained in the
`),dt=_(Xe,"CODE",{});var Yo=k(dt);nr=w(Yo,"quicktour"),Yo.forEach(o),rr=w(Xe,", which you can load with:"),Xe.forEach(o),zs=q(n),u(Y.$$.fragment,n),js=q(n),I=_(n,"H2",{class:!0});var gn=k(I);J=_(gn,"A",{id:!0,class:!0,href:!0});var Jo=k(J);_t=_(Jo,"SPAN",{});var Go=k(_t);u(Ee.$$.fragment,Go),Go.forEach(o),Jo.forEach(o),or=q(gn),kt=_(gn,"SPAN",{});var Qo=k(kt);ar=w(Qo,"Normalization"),Qo.forEach(o),gn.forEach(o),qs=q(n),G=_(n,"P",{});var wn=k(G);lr=w(wn,`Normalization is, in a nutshell, a set of operations you apply to a raw
string to make it less random or \u201Ccleaner\u201D. Common operations include
stripping whitespace, removing accented characters or lowercasing all
text. If you\u2019re familiar with `),Se=_(wn,"A",{href:!0,rel:!0});var Vo=k(Se);ir=w(Vo,`Unicode
normalization`),Vo.forEach(o),pr=w(wn,`, it is also a very
common normalization operation applied in most tokenizers.`),wn.forEach(o),bs=q(n),L=_(n,"P",{});var Ze=k(L);cr=w(Ze,`Each normalization operation is represented in the \u{1F917} Tokenizers library
by a `),gt=_(Ze,"CODE",{});var Xo=k(gt);ur=w(Xo,"Normalizer"),Xo.forEach(o),fr=w(Ze,`, and you can combine
several of those by using a `),wt=_(Ze,"CODE",{});var Zo=k(wt);$r=w(Zo,"normalizers.Sequence"),Zo.forEach(o),mr=w(Ze,`. Here is a normalizer applying NFD Unicode normalization
and removing accents as an example:`),Ze.forEach(o),vs=q(n),u(Q.$$.fragment,n),ys=q(n),Oe=_(n,"P",{});var ea=k(Oe);hr=w(ea,"You can manually test that normalizer by applying it to any string:"),ea.forEach(o),Ps=q(n),u(V.$$.fragment,n),Ts=q(n),X=_(n,"P",{});var zn=k(X);dr=w(zn,"When building a "),zt=_(zn,"CODE",{});var ta=k(zt);_r=w(ta,"Tokenizer"),ta.forEach(o),kr=w(zn,`, you can
customize its normalizer by just changing the corresponding attribute:`),zn.forEach(o),Es=q(n),u(Z.$$.fragment,n),Ss=q(n),Ie=_(n,"P",{});var sa=k(Ie);gr=w(sa,`Of course, if you change the way a tokenizer applies normalization, you
should probably retrain it from scratch afterward.`),sa.forEach(o),Ns=q(n),B=_(n,"H2",{class:!0});var jn=k(B);ee=_(jn,"A",{id:!0,class:!0,href:!0});var na=k(ee);jt=_(na,"SPAN",{});var ra=k(jt);u(Ne.$$.fragment,ra),ra.forEach(o),na.forEach(o),wr=q(jn),qt=_(jn,"SPAN",{});var oa=k(qt);zr=w(oa,"Pre-Tokenization"),oa.forEach(o),jn.forEach(o),As=q(n),Be=_(n,"P",{});var aa=k(Be);jr=w(aa,`Pre-tokenization is the act of splitting a text into smaller objects
that give an upper bound to what your tokens will be at the end of
training. A good way to think of this is that the pre-tokenizer will
split your text into \u201Cwords\u201D and then, your final tokens will be parts
of those words.`),aa.forEach(o),Cs=q(n),te=_(n,"P",{});var qn=k(te);qr=w(qn,`An easy way to pre-tokenize inputs is to split on spaces and
punctuations, which is done by the
`),bt=_(qn,"CODE",{});var la=k(bt);br=w(la,"pre_tokenizers.Whitespace"),la.forEach(o),vr=w(qn,`
pre-tokenizer:`),qn.forEach(o),Ds=q(n),u(se.$$.fragment,n),xs=q(n),S=_(n,"P",{});var ve=k(S);yr=w(ve,`The output is a list of tuples, with each tuple containing one word and
its span in the original sentence (which is used to determine the final
`),vt=_(ve,"CODE",{});var ia=k(vt);Pr=w(ia,"offsets"),ia.forEach(o),Tr=w(ve," of our "),yt=_(ve,"CODE",{});var pa=k(yt);Er=w(pa,"Encoding"),pa.forEach(o),Sr=w(ve,`). Note that splitting on
punctuation will split contractions like `),Pt=_(ve,"CODE",{});var ca=k(Pt);Nr=w(ca,`"I'm"`),ca.forEach(o),Ar=w(ve," in this example."),ve.forEach(o),Ws=q(n),ne=_(n,"P",{});var bn=k(ne);Cr=w(bn,"You can combine together any "),Tt=_(bn,"CODE",{});var ua=k(Tt);Dr=w(ua,"PreTokenizer"),ua.forEach(o),xr=w(bn,` together. For instance, here is a pre-tokenizer that will
split on space, punctuation and digits, separating numbers in their
individual digits:`),bn.forEach(o),Ls=q(n),u(re.$$.fragment,n),Hs=q(n),H=_(n,"P",{});var et=k(H);Wr=w(et,"As we saw in the "),Et=_(et,"CODE",{});var fa=k(Et);Lr=w(fa,"quicktour"),fa.forEach(o),Hr=w(et,`, you can
customize the pre-tokenizer of a `),St=_(et,"CODE",{});var $a=k(St);Or=w($a,"Tokenizer"),$a.forEach(o),Ir=w(et," by just changing the corresponding attribute:"),et.forEach(o),Os=q(n),u(oe.$$.fragment,n),Is=q(n),Fe=_(n,"P",{});var ma=k(Fe);Br=w(ma,`Of course, if you change the way the pre-tokenizer, you should probably
retrain your tokenizer from scratch afterward.`),ma.forEach(o),Bs=q(n),F=_(n,"H2",{class:!0});var vn=k(F);ae=_(vn,"A",{id:!0,class:!0,href:!0});var ha=k(ae);Nt=_(ha,"SPAN",{});var da=k(Nt);u(Ae.$$.fragment,da),da.forEach(o),ha.forEach(o),Fr=q(vn),At=_(vn,"SPAN",{});var _a=k(At);Ur=w(_a,"Model"),_a.forEach(o),vn.forEach(o),Fs=q(n),le=_(n,"P",{});var yn=k(le);Kr=w(yn,`Once the input texts are normalized and pre-tokenized, the
`),Ct=_(yn,"CODE",{});var ka=k(Ct);Rr=w(ka,"Tokenizer"),ka.forEach(o),Mr=w(yn,` applies the model on the
pre-tokens. This is the part of the pipeline that needs training on your
corpus (or that has been trained if you are using a pretrained
tokenizer).`),yn.forEach(o),Us=q(n),Ue=_(n,"P",{});var ga=k(Ue);Yr=w(ga,`The role of the model is to split your \u201Cwords\u201D into tokens, using the
rules it has learned. It\u2019s also responsible for mapping those tokens to
their corresponding IDs in the vocabulary of the model.`),ga.forEach(o),Ks=q(n),ie=_(n,"P",{});var Pn=k(ie);Jr=w(Pn,`This model is passed along when intializing the
`),Dt=_(Pn,"CODE",{});var wa=k(Dt);Gr=w(wa,"Tokenizer"),wa.forEach(o),Qr=w(Pn,` so you already know how to
customize this part. Currently, the \u{1F917} Tokenizers library supports:`),Pn.forEach(o),Rs=q(n),N=_(n,"UL",{});var ye=k(N);xt=_(ye,"LI",{});var za=k(xt);Wt=_(za,"CODE",{});var ja=k(Wt);Vr=w(ja,"models.BPE"),ja.forEach(o),za.forEach(o),Xr=q(ye),Lt=_(ye,"LI",{});var qa=k(Lt);Ht=_(qa,"CODE",{});var ba=k(Ht);Zr=w(ba,"models.Unigram"),ba.forEach(o),qa.forEach(o),eo=q(ye),Ot=_(ye,"LI",{});var va=k(Ot);It=_(va,"CODE",{});var ya=k(It);to=w(ya,"models.WordLevel"),ya.forEach(o),va.forEach(o),so=q(ye),Bt=_(ye,"LI",{});var Pa=k(Bt);Ft=_(Pa,"CODE",{});var Ta=k(Ft);no=w(Ta,"models.WordPiece"),Ta.forEach(o),Pa.forEach(o),ye.forEach(o),Ms=q(n),Ce=_(n,"P",{});var Uo=k(Ce);ro=w(Uo,`For more details about each model and its behavior, you can check
`),Ke=_(Uo,"A",{href:!0});var Ea=k(Ke);oo=w(Ea,"here"),Ea.forEach(o),Uo.forEach(o),Ys=q(n),U=_(n,"H2",{class:!0});var Tn=k(U);pe=_(Tn,"A",{id:!0,class:!0,href:!0});var Sa=k(pe);Ut=_(Sa,"SPAN",{});var Na=k(Ut);u(De.$$.fragment,Na),Na.forEach(o),Sa.forEach(o),ao=q(Tn),Kt=_(Tn,"SPAN",{});var Aa=k(Kt);lo=w(Aa,"Post-Processing"),Aa.forEach(o),Tn.forEach(o),Js=q(n),ce=_(n,"P",{});var En=k(ce);io=w(En,`Post-processing is the last step of the tokenization pipeline, to
perform any additional transformation to the
`),Rt=_(En,"CODE",{});var Ca=k(Rt);po=w(Ca,"Encoding"),Ca.forEach(o),co=w(En,` before it\u2019s returned, like
adding potential special tokens.`),En.forEach(o),Gs=q(n),ue=_(n,"P",{});var Sn=k(ue);uo=w(Sn,`As we saw in the quick tour, we can customize the post processor of a
`),Mt=_(Sn,"CODE",{});var Da=k(Mt);fo=w(Da,"Tokenizer"),Da.forEach(o),$o=w(Sn,` by setting the
corresponding attribute. For instance, here is how we can post-process
to make the inputs suitable for the BERT model:`),Sn.forEach(o),Qs=q(n),u(fe.$$.fragment,n),Vs=q(n),Re=_(n,"P",{});var xa=k(Re);mo=w(xa,`Note that contrarily to the pre-tokenizer or the normalizer, you don\u2019t
need to retrain a tokenizer after changing its post-processor.`),xa.forEach(o),Xs=q(n),K=_(n,"H2",{class:!0});var Nn=k(K);$e=_(Nn,"A",{id:!0,class:!0,href:!0});var Wa=k($e);Yt=_(Wa,"SPAN",{});var La=k(Yt);u(xe.$$.fragment,La),La.forEach(o),Wa.forEach(o),ho=q(Nn),Jt=_(Nn,"SPAN",{});var Ha=k(Jt);_o=w(Ha,"All together: a BERT tokenizer from scratch"),Ha.forEach(o),Nn.forEach(o),Zs=q(n),me=_(n,"P",{});var An=k(me);ko=w(An,`Let\u2019s put all those pieces together to build a BERT tokenizer. First,
BERT relies on WordPiece, so we instantiate a new
`),Gt=_(An,"CODE",{});var Oa=k(Gt);go=w(Oa,"Tokenizer"),Oa.forEach(o),wo=w(An," with this model:"),An.forEach(o),en=q(n),u(he.$$.fragment,n),tn=q(n),Me=_(n,"P",{});var Ia=k(Me);zo=w(Ia,`Then we know that BERT preprocesses texts by removing accents and
lowercasing. We also use a unicode normalizer:`),Ia.forEach(o),sn=q(n),u(de.$$.fragment,n),nn=q(n),Ye=_(n,"P",{});var Ba=k(Ye);jo=w(Ba,"The pre-tokenizer is just splitting on whitespace and punctuation:"),Ba.forEach(o),rn=q(n),u(_e.$$.fragment,n),on=q(n),Je=_(n,"P",{});var Fa=k(Je);qo=w(Fa,`And the post-processing uses the template we saw in the previous
section:`),Fa.forEach(o),an=q(n),u(ke.$$.fragment,n),ln=q(n),ge=_(n,"P",{});var Cn=k(ge);bo=w(Cn,`We can use this tokenizer and train on it on wikitext like in the
`),Qt=_(Cn,"CODE",{});var Ua=k(Qt);vo=w(Ua,"quicktour"),Ua.forEach(o),yo=w(Cn,":"),Cn.forEach(o),pn=q(n),u(we.$$.fragment,n),cn=q(n),R=_(n,"H2",{class:!0});var Dn=k(R);ze=_(Dn,"A",{id:!0,class:!0,href:!0});var Ka=k(ze);Vt=_(Ka,"SPAN",{});var Ra=k(Vt);u(We.$$.fragment,Ra),Ra.forEach(o),Ka.forEach(o),Po=q(Dn),Xt=_(Dn,"SPAN",{});var Ma=k(Xt);To=w(Ma,"Decoding"),Ma.forEach(o),Dn.forEach(o),un=q(n),A=_(n,"P",{});var Pe=k(A);Eo=w(Pe,"On top of encoding the input texts, a "),Zt=_(Pe,"CODE",{});var Ya=k(Zt);So=w(Ya,"Tokenizer"),Ya.forEach(o),No=w(Pe,` also has an API for decoding, that is converting IDs
generated by your model back to a text. This is done by the methods
`),es=_(Pe,"CODE",{});var Ja=k(es);Ao=w(Ja,"Tokenizer.decode"),Ja.forEach(o),Co=w(Pe," (for one predicted text) and "),ts=_(Pe,"CODE",{});var Ga=k(ts);Do=w(Ga,"Tokenizer.decode_batch"),Ga.forEach(o),xo=w(Pe," (for a batch of predictions)."),Pe.forEach(o),fn=q(n),Ge=_(n,"P",{});var Qa=k(Ge);Wo=w(Qa,`The [decoder]{.title-ref} will first convert the IDs back to tokens
(using the tokenizer\u2019s vocabulary) and remove all special tokens, then
join those tokens with spaces:`),Qa.forEach(o),$n=q(n),u(je.$$.fragment,n),mn=q(n),O=_(n,"P",{});var tt=k(O);Lo=w(tt,`If you used a model that added special characters to represent subtokens
of a given \u201Cword\u201D (like the `),ss=_(tt,"CODE",{});var Va=k(ss);Ho=w(Va,'"##"'),Va.forEach(o),Oo=w(tt,` in
WordPiece) you will need to customize the [decoder]{.title-ref} to treat
them properly. If we take our previous `),ns=_(tt,"CODE",{});var Xa=k(ns);Io=w(Xa,"bert_tokenizer"),Xa.forEach(o),Bo=w(tt,` for instance the
default decoing will give:`),tt.forEach(o),hn=q(n),u(qe.$$.fragment,n),dn=q(n),Qe=_(n,"P",{});var Za=k(Qe);Fo=w(Za,"But by changing it to a proper decoder, we get:"),Za.forEach(o),_n=q(n),u(be.$$.fragment,n),this.h()},h(){P(t,"name","hf:doc:metadata"),P(t,"content",JSON.stringify(Ji)),P(r,"id","the-tokenization-pipeline"),P(r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(r,"href","#the-tokenization-pipeline"),P(e,"class","relative group"),P(J,"id","normalization"),P(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(J,"href","#normalization"),P(I,"class","relative group"),P(Se,"href","https://unicode.org/reports/tr15"),P(Se,"rel","nofollow"),P(ee,"id","pretokenization"),P(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ee,"href","#pretokenization"),P(B,"class","relative group"),P(ae,"id","model"),P(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ae,"href","#model"),P(F,"class","relative group"),P(Ke,"href","components.html#models"),P(pe,"id","postprocessing"),P(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(pe,"href","#postprocessing"),P(U,"class","relative group"),P($e,"id","all-together-a-bert-tokenizer-from-scratch"),P($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P($e,"href","#all-together-a-bert-tokenizer-from-scratch"),P(K,"class","relative group"),P(ze,"id","decoding"),P(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ze,"href","#decoding"),P(R,"class","relative group")},m(n,p){a(document.head,t),z(n,s,p),z(n,e,p),a(e,r),a(r,i),f(Te,i,null),a(e,xn),a(e,st),a(st,Wn),z(n,_s,p),z(n,D,p),a(D,Ln),a(D,nt),a(nt,Hn),a(D,On),a(D,rt),a(rt,In),a(D,Bn),z(n,ks,p),z(n,E,p),a(E,ot),a(ot,at),a(at,Fn),a(E,Un),a(E,lt),a(lt,it),a(it,Kn),a(E,Rn),a(E,pt),a(pt,ct),a(ct,Mn),a(E,Yn),a(E,ut),a(ut,ft),a(ft,Jn),z(n,gs,p),z(n,x,p),a(x,Gn),a(x,$t),a($t,Qn),a(x,Vn),a(x,mt),a(mt,Xn),a(x,Zn),z(n,ws,p),z(n,W,p),a(W,er),a(W,ht),a(ht,tr),a(W,sr),a(W,dt),a(dt,nr),a(W,rr),z(n,zs,p),f(Y,n,p),z(n,js,p),z(n,I,p),a(I,J),a(J,_t),f(Ee,_t,null),a(I,or),a(I,kt),a(kt,ar),z(n,qs,p),z(n,G,p),a(G,lr),a(G,Se),a(Se,ir),a(G,pr),z(n,bs,p),z(n,L,p),a(L,cr),a(L,gt),a(gt,ur),a(L,fr),a(L,wt),a(wt,$r),a(L,mr),z(n,vs,p),f(Q,n,p),z(n,ys,p),z(n,Oe,p),a(Oe,hr),z(n,Ps,p),f(V,n,p),z(n,Ts,p),z(n,X,p),a(X,dr),a(X,zt),a(zt,_r),a(X,kr),z(n,Es,p),f(Z,n,p),z(n,Ss,p),z(n,Ie,p),a(Ie,gr),z(n,Ns,p),z(n,B,p),a(B,ee),a(ee,jt),f(Ne,jt,null),a(B,wr),a(B,qt),a(qt,zr),z(n,As,p),z(n,Be,p),a(Be,jr),z(n,Cs,p),z(n,te,p),a(te,qr),a(te,bt),a(bt,br),a(te,vr),z(n,Ds,p),f(se,n,p),z(n,xs,p),z(n,S,p),a(S,yr),a(S,vt),a(vt,Pr),a(S,Tr),a(S,yt),a(yt,Er),a(S,Sr),a(S,Pt),a(Pt,Nr),a(S,Ar),z(n,Ws,p),z(n,ne,p),a(ne,Cr),a(ne,Tt),a(Tt,Dr),a(ne,xr),z(n,Ls,p),f(re,n,p),z(n,Hs,p),z(n,H,p),a(H,Wr),a(H,Et),a(Et,Lr),a(H,Hr),a(H,St),a(St,Or),a(H,Ir),z(n,Os,p),f(oe,n,p),z(n,Is,p),z(n,Fe,p),a(Fe,Br),z(n,Bs,p),z(n,F,p),a(F,ae),a(ae,Nt),f(Ae,Nt,null),a(F,Fr),a(F,At),a(At,Ur),z(n,Fs,p),z(n,le,p),a(le,Kr),a(le,Ct),a(Ct,Rr),a(le,Mr),z(n,Us,p),z(n,Ue,p),a(Ue,Yr),z(n,Ks,p),z(n,ie,p),a(ie,Jr),a(ie,Dt),a(Dt,Gr),a(ie,Qr),z(n,Rs,p),z(n,N,p),a(N,xt),a(xt,Wt),a(Wt,Vr),a(N,Xr),a(N,Lt),a(Lt,Ht),a(Ht,Zr),a(N,eo),a(N,Ot),a(Ot,It),a(It,to),a(N,so),a(N,Bt),a(Bt,Ft),a(Ft,no),z(n,Ms,p),z(n,Ce,p),a(Ce,ro),a(Ce,Ke),a(Ke,oo),z(n,Ys,p),z(n,U,p),a(U,pe),a(pe,Ut),f(De,Ut,null),a(U,ao),a(U,Kt),a(Kt,lo),z(n,Js,p),z(n,ce,p),a(ce,io),a(ce,Rt),a(Rt,po),a(ce,co),z(n,Gs,p),z(n,ue,p),a(ue,uo),a(ue,Mt),a(Mt,fo),a(ue,$o),z(n,Qs,p),f(fe,n,p),z(n,Vs,p),z(n,Re,p),a(Re,mo),z(n,Xs,p),z(n,K,p),a(K,$e),a($e,Yt),f(xe,Yt,null),a(K,ho),a(K,Jt),a(Jt,_o),z(n,Zs,p),z(n,me,p),a(me,ko),a(me,Gt),a(Gt,go),a(me,wo),z(n,en,p),f(he,n,p),z(n,tn,p),z(n,Me,p),a(Me,zo),z(n,sn,p),f(de,n,p),z(n,nn,p),z(n,Ye,p),a(Ye,jo),z(n,rn,p),f(_e,n,p),z(n,on,p),z(n,Je,p),a(Je,qo),z(n,an,p),f(ke,n,p),z(n,ln,p),z(n,ge,p),a(ge,bo),a(ge,Qt),a(Qt,vo),a(ge,yo),z(n,pn,p),f(we,n,p),z(n,cn,p),z(n,R,p),a(R,ze),a(ze,Vt),f(We,Vt,null),a(R,Po),a(R,Xt),a(Xt,To),z(n,un,p),z(n,A,p),a(A,Eo),a(A,Zt),a(Zt,So),a(A,No),a(A,es),a(es,Ao),a(A,Co),a(A,ts),a(ts,Do),a(A,xo),z(n,fn,p),z(n,Ge,p),a(Ge,Wo),z(n,$n,p),f(je,n,p),z(n,mn,p),z(n,O,p),a(O,Lo),a(O,ss),a(ss,Ho),a(O,Oo),a(O,ns),a(ns,Io),a(O,Bo),z(n,hn,p),f(qe,n,p),z(n,dn,p),z(n,Qe,p),a(Qe,Fo),z(n,_n,p),f(be,n,p),kn=!0},p(n,[p]){const Le={};p&2&&(Le.$$scope={dirty:p,ctx:n}),Y.$set(Le);const rs={};p&2&&(rs.$$scope={dirty:p,ctx:n}),Q.$set(rs);const os={};p&2&&(os.$$scope={dirty:p,ctx:n}),V.$set(os);const as={};p&2&&(as.$$scope={dirty:p,ctx:n}),Z.$set(as);const M={};p&2&&(M.$$scope={dirty:p,ctx:n}),se.$set(M);const ls={};p&2&&(ls.$$scope={dirty:p,ctx:n}),re.$set(ls);const is={};p&2&&(is.$$scope={dirty:p,ctx:n}),oe.$set(is);const C={};p&2&&(C.$$scope={dirty:p,ctx:n}),fe.$set(C);const ps={};p&2&&(ps.$$scope={dirty:p,ctx:n}),he.$set(ps);const cs={};p&2&&(cs.$$scope={dirty:p,ctx:n}),de.$set(cs);const us={};p&2&&(us.$$scope={dirty:p,ctx:n}),_e.$set(us);const fs={};p&2&&(fs.$$scope={dirty:p,ctx:n}),ke.$set(fs);const $s={};p&2&&($s.$$scope={dirty:p,ctx:n}),we.$set($s);const ms={};p&2&&(ms.$$scope={dirty:p,ctx:n}),je.$set(ms);const hs={};p&2&&(hs.$$scope={dirty:p,ctx:n}),qe.$set(hs);const ds={};p&2&&(ds.$$scope={dirty:p,ctx:n}),be.$set(ds)},i(n){kn||($(Te.$$.fragment,n),$(Y.$$.fragment,n),$(Ee.$$.fragment,n),$(Q.$$.fragment,n),$(V.$$.fragment,n),$(Z.$$.fragment,n),$(Ne.$$.fragment,n),$(se.$$.fragment,n),$(re.$$.fragment,n),$(oe.$$.fragment,n),$(Ae.$$.fragment,n),$(De.$$.fragment,n),$(fe.$$.fragment,n),$(xe.$$.fragment,n),$(he.$$.fragment,n),$(de.$$.fragment,n),$(_e.$$.fragment,n),$(ke.$$.fragment,n),$(we.$$.fragment,n),$(We.$$.fragment,n),$(je.$$.fragment,n),$(qe.$$.fragment,n),$(be.$$.fragment,n),kn=!0)},o(n){m(Te.$$.fragment,n),m(Y.$$.fragment,n),m(Ee.$$.fragment,n),m(Q.$$.fragment,n),m(V.$$.fragment,n),m(Z.$$.fragment,n),m(Ne.$$.fragment,n),m(se.$$.fragment,n),m(re.$$.fragment,n),m(oe.$$.fragment,n),m(Ae.$$.fragment,n),m(De.$$.fragment,n),m(fe.$$.fragment,n),m(xe.$$.fragment,n),m(he.$$.fragment,n),m(de.$$.fragment,n),m(_e.$$.fragment,n),m(ke.$$.fragment,n),m(we.$$.fragment,n),m(We.$$.fragment,n),m(je.$$.fragment,n),m(qe.$$.fragment,n),m(be.$$.fragment,n),kn=!1},d(n){o(t),n&&o(s),n&&o(e),h(Te),n&&o(_s),n&&o(D),n&&o(ks),n&&o(E),n&&o(gs),n&&o(x),n&&o(ws),n&&o(W),n&&o(zs),h(Y,n),n&&o(js),n&&o(I),h(Ee),n&&o(qs),n&&o(G),n&&o(bs),n&&o(L),n&&o(vs),h(Q,n),n&&o(ys),n&&o(Oe),n&&o(Ps),h(V,n),n&&o(Ts),n&&o(X),n&&o(Es),h(Z,n),n&&o(Ss),n&&o(Ie),n&&o(Ns),n&&o(B),h(Ne),n&&o(As),n&&o(Be),n&&o(Cs),n&&o(te),n&&o(Ds),h(se,n),n&&o(xs),n&&o(S),n&&o(Ws),n&&o(ne),n&&o(Ls),h(re,n),n&&o(Hs),n&&o(H),n&&o(Os),h(oe,n),n&&o(Is),n&&o(Fe),n&&o(Bs),n&&o(F),h(Ae),n&&o(Fs),n&&o(le),n&&o(Us),n&&o(Ue),n&&o(Ks),n&&o(ie),n&&o(Rs),n&&o(N),n&&o(Ms),n&&o(Ce),n&&o(Ys),n&&o(U),h(De),n&&o(Js),n&&o(ce),n&&o(Gs),n&&o(ue),n&&o(Qs),h(fe,n),n&&o(Vs),n&&o(Re),n&&o(Xs),n&&o(K),h(xe),n&&o(Zs),n&&o(me),n&&o(en),h(he,n),n&&o(tn),n&&o(Me),n&&o(sn),h(de,n),n&&o(nn),n&&o(Ye),n&&o(rn),h(_e,n),n&&o(on),n&&o(Je),n&&o(an),h(ke,n),n&&o(ln),n&&o(ge),n&&o(pn),h(we,n),n&&o(cn),n&&o(R),h(We),n&&o(un),n&&o(A),n&&o(fn),n&&o(Ge),n&&o($n),h(je,n),n&&o(mn),n&&o(O),n&&o(hn),h(qe,n),n&&o(dn),n&&o(Qe),n&&o(_n),h(be,n)}}}const Ji={local:"the-tokenization-pipeline",sections:[{local:"normalization",title:"Normalization"},{local:"pretokenization",title:"Pre-Tokenization"},{local:"model",title:"Model"},{local:"postprocessing",title:"Post-Processing"},{local:"all-together-a-bert-tokenizer-from-scratch",title:"All together: a BERT tokenizer from scratch"},{local:"decoding",title:"Decoding"}],title:"The tokenization pipeline"};function Gi(l){return rl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ep extends el{constructor(t){super();tl(this,t,Gi,Yi,sl,{})}}export{ep as default,Ji as metadata};
