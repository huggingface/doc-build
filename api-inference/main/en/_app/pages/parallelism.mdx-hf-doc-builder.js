import{S as Ya,i as Fa,s as Ga,e as p,k as m,w as y,t as h,M as Xa,c as i,d as e,m as g,a as u,x as w,h as f,b as _,G as l,g as c,y as b,q,o as $,B as k,v as Qa,L as Q}from"../chunks/vendor-hf-doc-builder.js";import{I as qa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{I as Wa,M as V,C as Z}from"../chunks/InferenceApi-hf-doc-builder.js";function Va(j){let t,n;return t=new Z({props:{code:`# !pip install websockets
import asyncio
import json
import uuid
import websockets
MODEL_ID = "facebook/bart-large-mnli"
COMPUTE_TYPE = "cpu"  # or "gpu"
async def send(websocket, payloads):
    # You need to login with a first message as headers are not forwarded
    # for websockets
    await websocket.send(f"Bearer {API_TOKEN}".encode("utf-8"))
    for payload in payloads:
        await websocket.send(json.dumps(payload).encode("utf-8"))
        print("Sent ")
async def recv(websocket, last_id):
    outputs = []
    while True:
        data = await websocket.recv()
        payload = json.loads(data)
        if payload["type"] == "results":
            # {"type": "results", "outputs": JSONFormatted results, "id": the id we sent}
            print(payload["outputs"])
            outputs.append(payload["outputs"])
            if payload["id"] == last_id:
                return outputs
        else:
            # {"type": "status", "message": "Some information about the queue"}
            print(f"< {payload['message']}")
            pass
async def main():
    uri = f"wss://api-inference.huggingface.co/bulk/stream/{COMPUTE_TYPE}/{MODEL_ID}"
    async with websockets.connect(uri) as websocket:
        # inputs and parameters are classic, "id" is a way to track that query
        payloads = [
            {
                "id": str(uuid.uuid4()),
                "inputs": "This is a test about a new dress shop than opened up on 5th avenue",
                "parameters": {"candidate_labels": ["medical", "fashion", "politics"]},
            }
            for i in range(10)
        ]
        last_id = payloads[-1]["id"]
        future = send(websocket, payloads)
        future_r = recv(websocket, last_id)
        _, outputs = await asyncio.gather(future, future_r)
    results = [out["labels"][0] for out in outputs]
    return results
loop = asyncio.get_event_loop()
if loop.is_running():
    # When running in notebooks
    import nest_asyncio
    nest_asyncio.apply()
results = loop.run_until_complete(main())
# All results are "fashion"`,highlighted:`<span class="hljs-comment"># !pip install websockets</span>
<span class="hljs-keyword">import</span> asyncio
<span class="hljs-keyword">import</span> json
<span class="hljs-keyword">import</span> uuid
<span class="hljs-keyword">import</span> websockets
MODEL_ID = <span class="hljs-string">&quot;facebook/bart-large-mnli&quot;</span>
COMPUTE_TYPE = <span class="hljs-string">&quot;cpu&quot;</span>  <span class="hljs-comment"># or &quot;gpu&quot;</span>
<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">send</span>(<span class="hljs-params">websocket, payloads</span>):
    <span class="hljs-comment"># You need to login with a first message as headers are not forwarded</span>
    <span class="hljs-comment"># for websockets</span>
    <span class="hljs-keyword">await</span> websocket.send(<span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))
    <span class="hljs-keyword">for</span> payload <span class="hljs-keyword">in</span> payloads:
        <span class="hljs-keyword">await</span> websocket.send(json.dumps(payload).encode(<span class="hljs-string">&quot;utf-8&quot;</span>))
        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Sent &quot;</span>)
<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">recv</span>(<span class="hljs-params">websocket, last_id</span>):
    outputs = []
    <span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
        data = <span class="hljs-keyword">await</span> websocket.recv()
        payload = json.loads(data)
        <span class="hljs-keyword">if</span> payload[<span class="hljs-string">&quot;type&quot;</span>] == <span class="hljs-string">&quot;results&quot;</span>:
            <span class="hljs-comment"># {&quot;type&quot;: &quot;results&quot;, &quot;outputs&quot;: JSONFormatted results, &quot;id&quot;: the id we sent}</span>
            <span class="hljs-built_in">print</span>(payload[<span class="hljs-string">&quot;outputs&quot;</span>])
            outputs.append(payload[<span class="hljs-string">&quot;outputs&quot;</span>])
            <span class="hljs-keyword">if</span> payload[<span class="hljs-string">&quot;id&quot;</span>] == last_id:
                <span class="hljs-keyword">return</span> outputs
        <span class="hljs-keyword">else</span>:
            <span class="hljs-comment"># {&quot;type&quot;: &quot;status&quot;, &quot;message&quot;: &quot;Some information about the queue&quot;}</span>
            <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&lt; <span class="hljs-subst">{payload[<span class="hljs-string">&#x27;message&#x27;</span>]}</span>&quot;</span>)
            <span class="hljs-keyword">pass</span>
<span class="hljs-keyword">async</span> <span class="hljs-keyword">def</span> <span class="hljs-title function_">main</span>():
    uri = <span class="hljs-string">f&quot;wss://api-inference.huggingface.co/bulk/stream/<span class="hljs-subst">{COMPUTE_TYPE}</span>/<span class="hljs-subst">{MODEL_ID}</span>&quot;</span>
    <span class="hljs-keyword">async</span> <span class="hljs-keyword">with</span> websockets.connect(uri) <span class="hljs-keyword">as</span> websocket:
        <span class="hljs-comment"># inputs and parameters are classic, &quot;id&quot; is a way to track that query</span>
        payloads = [
            {
                <span class="hljs-string">&quot;id&quot;</span>: <span class="hljs-built_in">str</span>(uuid.uuid4()),
                <span class="hljs-string">&quot;inputs&quot;</span>: <span class="hljs-string">&quot;This is a test about a new dress shop than opened up on 5th avenue&quot;</span>,
                <span class="hljs-string">&quot;parameters&quot;</span>: {<span class="hljs-string">&quot;candidate_labels&quot;</span>: [<span class="hljs-string">&quot;medical&quot;</span>, <span class="hljs-string">&quot;fashion&quot;</span>, <span class="hljs-string">&quot;politics&quot;</span>]},
            }
            <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">10</span>)
        ]
        last_id = payloads[-<span class="hljs-number">1</span>][<span class="hljs-string">&quot;id&quot;</span>]
        future = send(websocket, payloads)
        future_r = recv(websocket, last_id)
        _, outputs = <span class="hljs-keyword">await</span> asyncio.gather(future, future_r)
    results = [out[<span class="hljs-string">&quot;labels&quot;</span>][<span class="hljs-number">0</span>] <span class="hljs-keyword">for</span> out <span class="hljs-keyword">in</span> outputs]
    <span class="hljs-keyword">return</span> results
loop = asyncio.get_event_loop()
<span class="hljs-keyword">if</span> loop.is_running():
    <span class="hljs-comment"># When running in notebooks</span>
    <span class="hljs-keyword">import</span> nest_asyncio
    nest_asyncio.apply()
results = loop.run_until_complete(main())
<span class="hljs-comment"># All results are &quot;fashion&quot;</span>`}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function Za(j){let t,n;return t=new V({props:{$$slots:{default:[Va]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function st(j){let t,n;return t=new Z({props:{code:`// npm install ws
import WebSocket from "ws";
const API_TOKEN = ({}).HF_API_TOKEN;
const model_id = "facebook/bart-large-mnli";
const uri = \`wss://api-inference.huggingface.co/bulk/stream/cpu/\${model_id}\`;
const ws = new WebSocket(uri);
const ids = Array.from(Array(10).keys());
const last_id = ids[ids.length - 1];
function poll() {
    ws.on("open", function open() {
        // console.log("Opened");
        ws.send(\`Bearer \${API_TOKEN}\`, { binary: true });
        for (const id of ids) {
            ws.send(
                JSON.stringify({
                    inputs: "This is a test about a new dress shop than opened up on 5th avenue",
                    parameters: { candidate_labels: ["fashion", "politics"] },
                    id,
                }),
                { binary: true }
            );
        }
    });
    ws.on("message", function incoming(data) {
        const message = JSON.parse(data);
        if (message.type == "results") {
            console.log(JSON.stringify(message.outputs));
            if (message.id == last_id) {
                ws.close();
            }
        } else if (message.type == "status") {
            console.log("< %s", message.message);
        }
    });
    ws.on("error", function incoming(message) {
        console.log("error received: %s", message);
    });
}
poll();`,highlighted:`<span class="hljs-comment">// npm install ws</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">WebSocket</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;ws&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">API_TOKEN</span> = process.<span class="hljs-property">env</span>.<span class="hljs-property">HF_API_TOKEN</span>;
<span class="hljs-keyword">const</span> model_id = <span class="hljs-string">&quot;facebook/bart-large-mnli&quot;</span>;
<span class="hljs-keyword">const</span> uri = <span class="hljs-string">\`wss://api-inference.huggingface.co/bulk/stream/cpu/<span class="hljs-subst">\${model_id}</span>\`</span>;
<span class="hljs-keyword">const</span> ws = <span class="hljs-keyword">new</span> <span class="hljs-title class_">WebSocket</span>(uri);
<span class="hljs-keyword">const</span> ids = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>(<span class="hljs-title class_">Array</span>(<span class="hljs-number">10</span>).<span class="hljs-title function_">keys</span>());
<span class="hljs-keyword">const</span> last_id = ids[ids.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>];
<span class="hljs-keyword">function</span> <span class="hljs-title function_">poll</span>(<span class="hljs-params"></span>) {
    ws.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;open&quot;</span>, <span class="hljs-keyword">function</span> <span class="hljs-title function_">open</span>(<span class="hljs-params"></span>) {
        <span class="hljs-comment">// console.log(&quot;Opened&quot;);</span>
        ws.<span class="hljs-title function_">send</span>(<span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span>, { <span class="hljs-attr">binary</span>: <span class="hljs-literal">true</span> });
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> id <span class="hljs-keyword">of</span> ids) {
            ws.<span class="hljs-title function_">send</span>(
                <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>({
                    <span class="hljs-attr">inputs</span>: <span class="hljs-string">&quot;This is a test about a new dress shop than opened up on 5th avenue&quot;</span>,
                    <span class="hljs-attr">parameters</span>: { <span class="hljs-attr">candidate_labels</span>: [<span class="hljs-string">&quot;fashion&quot;</span>, <span class="hljs-string">&quot;politics&quot;</span>] },
                    id,
                }),
                { <span class="hljs-attr">binary</span>: <span class="hljs-literal">true</span> }
            );
        }
    });
    ws.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;message&quot;</span>, <span class="hljs-keyword">function</span> <span class="hljs-title function_">incoming</span>(<span class="hljs-params">data</span>) {
        <span class="hljs-keyword">const</span> message = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(data);
        <span class="hljs-keyword">if</span> (message.<span class="hljs-property">type</span> == <span class="hljs-string">&quot;results&quot;</span>) {
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(message.<span class="hljs-property">outputs</span>));
            <span class="hljs-keyword">if</span> (message.<span class="hljs-property">id</span> == last_id) {
                ws.<span class="hljs-title function_">close</span>();
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (message.<span class="hljs-property">type</span> == <span class="hljs-string">&quot;status&quot;</span>) {
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;&lt; %s&quot;</span>, message.<span class="hljs-property">message</span>);
        }
    });
    ws.<span class="hljs-title function_">on</span>(<span class="hljs-string">&quot;error&quot;</span>, <span class="hljs-keyword">function</span> <span class="hljs-title function_">incoming</span>(<span class="hljs-params">message</span>) {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;error received: %s&quot;</span>, message);
    });
}
<span class="hljs-title function_">poll</span>();`}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function at(j){let t,n;return t=new V({props:{$$slots:{default:[st]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function tt(j){let t,n;return t=new Z({props:{code:"# This is not supported with curl",highlighted:'<span class="hljs-comment"># This is not supported with curl</span>'}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function et(j){let t,n;return t=new V({props:{$$slots:{default:[tt]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function nt(j){let t,n;return t=new Z({props:{code:`import requests
model_id = "facebook/wav2vec2-base-960h"
API_URL = f"https://api-inference.huggingface.co/bulk/run/cpu/{model_id}"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
data = json.dumps(
    {
        "dataset_name": "ApiInferenceTest/asr_dummy",
        "dataset_config": "asr",
        "dataset_split": "test",
        "dataset_column": "file",
    }
)
response = requests.request("POST", API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn("jobid", data, f"Expected some job id, got {data}")
STATUS_URL = f"https://api-inference.huggingface.co/bulk/status/{data['jobid']}"
status = requests.request("GET", STATUS_URL, headers=headers)
# results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output
# dataset, accessible at https://huggingface.co/datasets/{bulk_name}
# status == {"status":{"active":1,"start_time":1627479091.0}}`,highlighted:`<span class="hljs-keyword">import</span> requests
model_id = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>
API_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">{model_id}</span>&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
data = json.dumps(
    {
        <span class="hljs-string">&quot;dataset_name&quot;</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
        <span class="hljs-string">&quot;dataset_config&quot;</span>: <span class="hljs-string">&quot;asr&quot;</span>,
        <span class="hljs-string">&quot;dataset_split&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>,
        <span class="hljs-string">&quot;dataset_column&quot;</span>: <span class="hljs-string">&quot;file&quot;</span>,
    }
)
response = requests.request(<span class="hljs-string">&quot;POST&quot;</span>, API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn(<span class="hljs-string">&quot;jobid&quot;</span>, data, <span class="hljs-string">f&quot;Expected some job id, got <span class="hljs-subst">{data}</span>&quot;</span>)
STATUS_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">{data[<span class="hljs-string">&#x27;jobid&#x27;</span>]}</span>&quot;</span>
status = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, STATUS_URL, headers=headers)
<span class="hljs-comment"># results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output</span>
<span class="hljs-comment"># dataset, accessible at https://huggingface.co/datasets/{bulk_name}</span>
<span class="hljs-comment"># status == {&quot;status&quot;:{&quot;active&quot;:1,&quot;start_time&quot;:1627479091.0}}</span>`}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function lt(j){let t,n;return t=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function ot(j){let t,n;return t=new Z({props:{code:`import fetch from "node-fetch";
const API_TOKEN = ({}).API_TOKEN;
const MODEL_ID = "facebook/wav2vec2-base-960h";
const url = \`https://api-inference.huggingface.co/bulk/run/cpu/\${MODEL_ID}\`;
const headers = { Authorization: \`Bearer \${API_TOKEN}\` };
const data = {
    dataset_name: "ApiInferenceTest/asr_dummy",
    dataset_config: "asr",
    dataset_split: "test",
    dataset_column: "file",
};
const params = {
    headers,
    method: "POST",
    body: JSON.stringify(data),
};
fetch(url, params).then((response) => {
    response.json().then((data) => {
        console.log(JSON.stringify(data));
        // {"jobid": "bulk-68079542", "bulk_name": "somename"}
        fetch(
            \`https://api-inference.huggingface.co/bulk/status/\${data["jobid"]}\`,
            {
                headers,
            }
        ).then((response) => {
            response.json().then((status_data) => {
                console.log(JSON.stringify(status_data));
                // {"status": {"active": 1, "start_time": timestamp}}
            });
        });
    });
});`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">API_TOKEN</span> = process.<span class="hljs-property">env</span>.<span class="hljs-property">API_TOKEN</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">MODEL_ID</span> = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>;
<span class="hljs-keyword">const</span> url = <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">\${MODEL_ID}</span>\`</span>;
<span class="hljs-keyword">const</span> headers = { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span> };
<span class="hljs-keyword">const</span> data = {
    <span class="hljs-attr">dataset_name</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
    <span class="hljs-attr">dataset_config</span>: <span class="hljs-string">&quot;asr&quot;</span>,
    <span class="hljs-attr">dataset_split</span>: <span class="hljs-string">&quot;test&quot;</span>,
    <span class="hljs-attr">dataset_column</span>: <span class="hljs-string">&quot;file&quot;</span>,
};
<span class="hljs-keyword">const</span> params = {
    headers,
    <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;POST&quot;</span>,
    <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data),
};
<span class="hljs-title function_">fetch</span>(url, params).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data));
        <span class="hljs-comment">// {&quot;jobid&quot;: &quot;bulk-68079542&quot;, &quot;bulk_name&quot;: &quot;somename&quot;}</span>
        <span class="hljs-title function_">fetch</span>(
            <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">\${data[<span class="hljs-string">&quot;jobid&quot;</span>]}</span>\`</span>,
            {
                headers,
            }
        ).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
            response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">status_data</span>) =&gt;</span> {
                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(status_data));
                <span class="hljs-comment">// {&quot;status&quot;: {&quot;active&quot;: 1, &quot;start_time&quot;: timestamp}}</span>
            });
        });
    });
});`}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function rt(j){let t,n;return t=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function pt(j){let t,n;return t=new Z({props:{code:`curl -X POST -d '{"dataset_name": "ApiInferenceTest/asr_dummy", "dataset_config": "asr", "dataset_split": "test", "dataset_column": "file"}' https://api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H "Authorization: Bearer \${API_TOKEN}"
# {"jobid": "bulk-68079542", "bulk_name": "somename"}
curl https://api-inference.huggingface.co/bulk/status/bulk-68079542`,highlighted:`curl -X POST -d <span class="hljs-string">&#x27;{&quot;dataset_name&quot;: &quot;ApiInferenceTest/asr_dummy&quot;, &quot;dataset_config&quot;: &quot;asr&quot;, &quot;dataset_split&quot;: &quot;test&quot;, &quot;dataset_column&quot;: &quot;file&quot;}&#x27;</span> https://api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># {&quot;jobid&quot;: &quot;bulk-68079542&quot;, &quot;bulk_name&quot;: &quot;somename&quot;}</span>
curl https://api-inference.huggingface.co/bulk/status/bulk-68079542`}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p:Q,i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function it(j){let t,n;return t=new V({props:{$$slots:{default:[pt]},$$scope:{ctx:j}}}),{c(){y(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){b(t,s,o),n=!0},p(s,o){const d={};o&2&&(d.$$scope={dirty:o,ctx:s}),t.$set(d)},i(s){n||(q(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function ut(j){let t,n,s,o,d,K,Hs,ss,Bs,fs,R,zs,ds,W,Cs,ms,E,as,Rs,Ws,ts,Ys,gs,v,P,es,M,Fs,ns,Gs,js,O,Xs,ls,Qs,Vs,_s,Y,Zs,ys,A,ws,F,sa,bs,G,aa,qs,I,ta,os,ea,na,$s,S,la,rs,oa,ra,ks,N,ps,pa,ia,J,ua,is,ca,ha,vs,T,L,us,H,fa,cs,da,Ts,x,ma,B,ga,ja,Es,D,_a,z,ya,wa,Ps,X,ba,Os,U,As;return K=new qa({}),M=new qa({}),A=new Wa({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[et],js:[at],python:[Za]},$$scope:{ctx:j}}}),H=new qa({}),U=new Wa({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[it],js:[rt],python:[lt]},$$scope:{ctx:j}}}),{c(){t=p("meta"),n=m(),s=p("h1"),o=p("a"),d=p("span"),y(K.$$.fragment),Hs=m(),ss=p("span"),Bs=h("Parallelism and batch jobs"),fs=m(),R=p("p"),zs=h(`In order to get your answers as quickly as possible, you probably want
to run some kind of parallelism on your jobs.`),ds=m(),W=p("p"),Cs=h("There are two options at your disposal for this."),ms=m(),E=p("ul"),as=p("li"),Rs=h("The streaming option"),Ws=m(),ts=p("li"),Ys=h("The dataset option"),gs=m(),v=p("h2"),P=p("a"),es=p("span"),y(M.$$.fragment),Fs=m(),ns=p("span"),Gs=h("Streaming"),js=m(),O=p("p"),Xs=h(`In order to maximize the speed of inference, instead of running many
HTTP requests it will be more efficient to stream your data to the API.
This will require the use of websockets on your end. Internally we\u2019re
using a queue system where machines can variously pull work, seamlessly
using parallelism for you. `),ls=p("strong"),Qs=h(`This is meant as a batching mechanism and a
single stream should be open at any give time`),Vs=h(`. If multiple streams are
open, requests will go to either without any guarantee. This is intended
as it allows recovering from a stream cut. Simply reinitializing the
stream will recover results, everything that was sent is being processed
even if you are not connected anymore. So make sure you don\u2019t send item
multiple times other wise you will be billed multiple times.`),_s=m(),Y=p("p"),Zs=h("Here is a small example:"),ys=m(),y(A.$$.fragment),ws=m(),F=p("p"),sa=h("The messages you need to send need to contain inputs keys."),bs=m(),G=p("p"),aa=h(`Optionnally you can specifiy id key that will be sent back
with the result. We try to maintain the ordering of results as you sent,
but it\u2019s better to be sure, the id key is there for that.`),qs=m(),I=p("p"),ta=h(`Optionnally, you can specify parameters key that
corresponds to `),os=p("code"),ea=h("detailed_parameters"),na=h(` of
the pipeline you are using.`),$s=m(),S=p("p"),la=h("The received messages will "),rs=p("em"),oa=h("always"),ra=h(" contain a type key."),ks=m(),N=p("ul"),ps=p("li"),pa=h(`status message: These messages will contain a
message key that will inform you about the current
status of the job`),ia=m(),J=p("li"),ua=h(`results message: These messages will contain the
actual results of the computation. id will contain the
id you have sent (or one will be generated automatically).
outputs will contain the result like it would be sent
by the HTTP endpoint. See `),is=p("code"),ca=h("detailed_parameters"),ha=h(" for more information."),vs=m(),T=p("h2"),L=p("a"),us=p("span"),y(H.$$.fragment),fa=m(),cs=p("span"),da=h("Dataset"),Ts=m(),x=p("p"),ma=h(`If you are running regulary against the same dataset to check
differences between models or drifts we recommend using a
`),B=p("a"),ga=h("dataset"),ja=h(" ."),Es=m(),D=p("p"),_a=h(`Or use any of the 2000 available datasets:
`),z=p("a"),ya=h("here"),wa=h("."),Ps=m(),X=p("p"),ba=h(`The outputs of this method will automatically create a private dataset
on your account, and use git mechanisms to store versions of the various
outputs.`),Os=m(),y(U.$$.fragment),this.h()},l(a){const r=Xa('[data-svelte="svelte-1phssyn"]',document.head);t=i(r,"META",{name:!0,content:!0}),r.forEach(e),n=g(a),s=i(a,"H1",{class:!0});var C=u(s);o=i(C,"A",{id:!0,class:!0,href:!0});var hs=u(o);d=i(hs,"SPAN",{});var $a=u(d);w(K.$$.fragment,$a),$a.forEach(e),hs.forEach(e),Hs=g(C),ss=i(C,"SPAN",{});var ka=u(ss);Bs=f(ka,"Parallelism and batch jobs"),ka.forEach(e),C.forEach(e),fs=g(a),R=i(a,"P",{});var va=u(R);zs=f(va,`In order to get your answers as quickly as possible, you probably want
to run some kind of parallelism on your jobs.`),va.forEach(e),ds=g(a),W=i(a,"P",{});var Ta=u(W);Cs=f(Ta,"There are two options at your disposal for this."),Ta.forEach(e),ms=g(a),E=i(a,"UL",{});var Is=u(E);as=i(Is,"LI",{});var Ea=u(as);Rs=f(Ea,"The streaming option"),Ea.forEach(e),Ws=g(Is),ts=i(Is,"LI",{});var Pa=u(ts);Ys=f(Pa,"The dataset option"),Pa.forEach(e),Is.forEach(e),gs=g(a),v=i(a,"H2",{class:!0});var Ss=u(v);P=i(Ss,"A",{id:!0,class:!0,href:!0});var Oa=u(P);es=i(Oa,"SPAN",{});var Aa=u(es);w(M.$$.fragment,Aa),Aa.forEach(e),Oa.forEach(e),Fs=g(Ss),ns=i(Ss,"SPAN",{});var Ia=u(ns);Gs=f(Ia,"Streaming"),Ia.forEach(e),Ss.forEach(e),js=g(a),O=i(a,"P",{});var Ns=u(O);Xs=f(Ns,`In order to maximize the speed of inference, instead of running many
HTTP requests it will be more efficient to stream your data to the API.
This will require the use of websockets on your end. Internally we\u2019re
using a queue system where machines can variously pull work, seamlessly
using parallelism for you. `),ls=i(Ns,"STRONG",{});var Sa=u(ls);Qs=f(Sa,`This is meant as a batching mechanism and a
single stream should be open at any give time`),Sa.forEach(e),Vs=f(Ns,`. If multiple streams are
open, requests will go to either without any guarantee. This is intended
as it allows recovering from a stream cut. Simply reinitializing the
stream will recover results, everything that was sent is being processed
even if you are not connected anymore. So make sure you don\u2019t send item
multiple times other wise you will be billed multiple times.`),Ns.forEach(e),_s=g(a),Y=i(a,"P",{});var Na=u(Y);Zs=f(Na,"Here is a small example:"),Na.forEach(e),ys=g(a),w(A.$$.fragment,a),ws=g(a),F=i(a,"P",{});var La=u(F);sa=f(La,"The messages you need to send need to contain inputs keys."),La.forEach(e),bs=g(a),G=i(a,"P",{});var xa=u(G);aa=f(xa,`Optionnally you can specifiy id key that will be sent back
with the result. We try to maintain the ordering of results as you sent,
but it\u2019s better to be sure, the id key is there for that.`),xa.forEach(e),qs=g(a),I=i(a,"P",{});var Ls=u(I);ta=f(Ls,`Optionnally, you can specify parameters key that
corresponds to `),os=i(Ls,"CODE",{});var Da=u(os);ea=f(Da,"detailed_parameters"),Da.forEach(e),na=f(Ls,` of
the pipeline you are using.`),Ls.forEach(e),$s=g(a),S=i(a,"P",{});var xs=u(S);la=f(xs,"The received messages will "),rs=i(xs,"EM",{});var Ua=u(rs);oa=f(Ua,"always"),Ua.forEach(e),ra=f(xs," contain a type key."),xs.forEach(e),ks=g(a),N=i(a,"UL",{});var Ds=u(N);ps=i(Ds,"LI",{});var Ka=u(ps);pa=f(Ka,`status message: These messages will contain a
message key that will inform you about the current
status of the job`),Ka.forEach(e),ia=g(Ds),J=i(Ds,"LI",{});var Us=u(J);ua=f(Us,`results message: These messages will contain the
actual results of the computation. id will contain the
id you have sent (or one will be generated automatically).
outputs will contain the result like it would be sent
by the HTTP endpoint. See `),is=i(Us,"CODE",{});var Ma=u(is);ca=f(Ma,"detailed_parameters"),Ma.forEach(e),ha=f(Us," for more information."),Us.forEach(e),Ds.forEach(e),vs=g(a),T=i(a,"H2",{class:!0});var Ks=u(T);L=i(Ks,"A",{id:!0,class:!0,href:!0});var Ja=u(L);us=i(Ja,"SPAN",{});var Ha=u(us);w(H.$$.fragment,Ha),Ha.forEach(e),Ja.forEach(e),fa=g(Ks),cs=i(Ks,"SPAN",{});var Ba=u(cs);da=f(Ba,"Dataset"),Ba.forEach(e),Ks.forEach(e),Ts=g(a),x=i(a,"P",{});var Ms=u(x);ma=f(Ms,`If you are running regulary against the same dataset to check
differences between models or drifts we recommend using a
`),B=i(Ms,"A",{href:!0,rel:!0});var za=u(B);ga=f(za,"dataset"),za.forEach(e),ja=f(Ms," ."),Ms.forEach(e),Es=g(a),D=i(a,"P",{});var Js=u(D);_a=f(Js,`Or use any of the 2000 available datasets:
`),z=i(Js,"A",{href:!0,rel:!0});var Ca=u(z);ya=f(Ca,"here"),Ca.forEach(e),wa=f(Js,"."),Js.forEach(e),Ps=g(a),X=i(a,"P",{});var Ra=u(X);ba=f(Ra,`The outputs of this method will automatically create a private dataset
on your account, and use git mechanisms to store versions of the various
outputs.`),Ra.forEach(e),Os=g(a),w(U.$$.fragment,a),this.h()},h(){_(t,"name","hf:doc:metadata"),_(t,"content",JSON.stringify(ct)),_(o,"id","parallelism-and-batch-jobs"),_(o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(o,"href","#parallelism-and-batch-jobs"),_(s,"class","relative group"),_(P,"id","streaming"),_(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(P,"href","#streaming"),_(v,"class","relative group"),_(L,"id","dataset"),_(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(L,"href","#dataset"),_(T,"class","relative group"),_(B,"href","https://huggingface.co/docs/datasets/"),_(B,"rel","nofollow"),_(z,"href","https://huggingface.co/datasets"),_(z,"rel","nofollow")},m(a,r){l(document.head,t),c(a,n,r),c(a,s,r),l(s,o),l(o,d),b(K,d,null),l(s,Hs),l(s,ss),l(ss,Bs),c(a,fs,r),c(a,R,r),l(R,zs),c(a,ds,r),c(a,W,r),l(W,Cs),c(a,ms,r),c(a,E,r),l(E,as),l(as,Rs),l(E,Ws),l(E,ts),l(ts,Ys),c(a,gs,r),c(a,v,r),l(v,P),l(P,es),b(M,es,null),l(v,Fs),l(v,ns),l(ns,Gs),c(a,js,r),c(a,O,r),l(O,Xs),l(O,ls),l(ls,Qs),l(O,Vs),c(a,_s,r),c(a,Y,r),l(Y,Zs),c(a,ys,r),b(A,a,r),c(a,ws,r),c(a,F,r),l(F,sa),c(a,bs,r),c(a,G,r),l(G,aa),c(a,qs,r),c(a,I,r),l(I,ta),l(I,os),l(os,ea),l(I,na),c(a,$s,r),c(a,S,r),l(S,la),l(S,rs),l(rs,oa),l(S,ra),c(a,ks,r),c(a,N,r),l(N,ps),l(ps,pa),l(N,ia),l(N,J),l(J,ua),l(J,is),l(is,ca),l(J,ha),c(a,vs,r),c(a,T,r),l(T,L),l(L,us),b(H,us,null),l(T,fa),l(T,cs),l(cs,da),c(a,Ts,r),c(a,x,r),l(x,ma),l(x,B),l(B,ga),l(x,ja),c(a,Es,r),c(a,D,r),l(D,_a),l(D,z),l(z,ya),l(D,wa),c(a,Ps,r),c(a,X,r),l(X,ba),c(a,Os,r),b(U,a,r),As=!0},p(a,[r]){const C={};r&2&&(C.$$scope={dirty:r,ctx:a}),A.$set(C);const hs={};r&2&&(hs.$$scope={dirty:r,ctx:a}),U.$set(hs)},i(a){As||(q(K.$$.fragment,a),q(M.$$.fragment,a),q(A.$$.fragment,a),q(H.$$.fragment,a),q(U.$$.fragment,a),As=!0)},o(a){$(K.$$.fragment,a),$(M.$$.fragment,a),$(A.$$.fragment,a),$(H.$$.fragment,a),$(U.$$.fragment,a),As=!1},d(a){e(t),a&&e(n),a&&e(s),k(K),a&&e(fs),a&&e(R),a&&e(ds),a&&e(W),a&&e(ms),a&&e(E),a&&e(gs),a&&e(v),k(M),a&&e(js),a&&e(O),a&&e(_s),a&&e(Y),a&&e(ys),k(A,a),a&&e(ws),a&&e(F),a&&e(bs),a&&e(G),a&&e(qs),a&&e(I),a&&e($s),a&&e(S),a&&e(ks),a&&e(N),a&&e(vs),a&&e(T),k(H),a&&e(Ts),a&&e(x),a&&e(Es),a&&e(D),a&&e(Ps),a&&e(X),a&&e(Os),k(U,a)}}}const ct={local:"parallelism-and-batch-jobs",sections:[{local:"streaming",title:"Streaming"},{local:"dataset",title:"Dataset"}],title:"Parallelism and batch jobs"};function ht(j){return Qa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gt extends Ya{constructor(t){super();Fa(this,t,ht,ut,Ga,{})}}export{gt as default,ct as metadata};
