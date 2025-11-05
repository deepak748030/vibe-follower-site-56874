import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { usersAPI } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

const API = () => {
    const { user, refreshUser } = useAuth();
    const [generating, setGenerating] = useState(false);
    const apiKey = user?.apiKey || "Generate your API key below";
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000' + "/api/v2";

    const handleGenerateApiKey = async () => {
        setGenerating(true);
        try {
            await usersAPI.generateApiKey();
            toast.success("API key generated successfully!");
            await refreshUser();
        } catch (error: any) {
            toast.error(error.message || "Failed to generate API key");
        } finally {
            setGenerating(false);
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const codeExamples = {
        services: {
            php: `<?php
$data = [
    'key' => '${apiKey}',
    'action' => 'services'
];

$ch = curl_init('${apiUrl}');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

print_r(json_decode($response, true));`,
            javascript: `const data = {
  key: '${apiKey}',
  action: 'services'
};

fetch('${apiUrl}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data));`,
            python: `import requests

data = {
    'key': '${apiKey}',
    'action': 'services'
}

response = requests.post('${apiUrl}', data=data)
print(response.json())`,
            java: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;

URL url = new URL("${apiUrl}");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);

String data = "key=${apiKey}&action=services";
OutputStream os = conn.getOutputStream();
os.write(data.getBytes());
os.flush();

BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
String output;
while ((output = br.readLine()) != null) {
    System.out.println(output);
}`
        },
        addOrder: {
            php: `<?php
$data = [
    'key' => '${apiKey}',
    'action' => 'add',
    'service' => 1,
    'link' => 'https://example.com/profile',
    'quantity' => 100
];

$ch = curl_init('${apiUrl}');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

print_r(json_decode($response, true));`,
            javascript: `const data = {
  key: '${apiKey}',
  action: 'add',
  service: 1,
  link: 'https://example.com/profile',
  quantity: 100
};

fetch('${apiUrl}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data));`,
            python: `import requests

data = {
    'key': '${apiKey}',
    'action': 'add',
    'service': 1,
    'link': 'https://example.com/profile',
    'quantity': 100
}

response = requests.post('${apiUrl}', data=data)
print(response.json())`,
            java: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;

URL url = new URL("${apiUrl}");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);

String data = "key=${apiKey}&action=add&service=1&link=https://example.com/profile&quantity=100";
OutputStream os = conn.getOutputStream();
os.write(data.getBytes());
os.flush();

BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
String output;
while ((output = br.readLine()) != null) {
    System.out.println(output);
}`
        },
        status: {
            php: `<?php
$data = [
    'key' => '${apiKey}',
    'action' => 'status',
    'order' => 23501
];

$ch = curl_init('${apiUrl}');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

print_r(json_decode($response, true));`,
            javascript: `const data = {
  key: '${apiKey}',
  action: 'status',
  order: 23501
};

fetch('${apiUrl}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data));`,
            python: `import requests

data = {
    'key': '${apiKey}',
    'action': 'status',
    'order': 23501
}

response = requests.post('${apiUrl}', data=data)
print(response.json())`,
            java: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;

URL url = new URL("${apiUrl}");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);

String data = "key=${apiKey}&action=status&order=23501";
OutputStream os = conn.getOutputStream();
os.write(data.getBytes());
os.flush();

BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
String output;
while ((output = br.readLine()) != null) {
    System.out.println(output);
}`
        },
        balance: {
            php: `<?php
$data = [
    'key' => '${apiKey}',
    'action' => 'balance'
];

$ch = curl_init('${apiUrl}');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

print_r(json_decode($response, true));`,
            javascript: `const data = {
  key: '${apiKey}',
  action: 'balance'
};

fetch('${apiUrl}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(data)
})
.then(response => response.json())
.then(data => console.log(data));`,
            python: `import requests

data = {
    'key': '${apiKey}',
    'action': 'balance'
}

response = requests.post('${apiUrl}', data=data)
print(response.json())`,
            java: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;

URL url = new URL("${apiUrl}");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);

String data = "key=${apiKey}&action=balance";
OutputStream os = conn.getOutputStream();
os.write(data.getBytes());
os.flush();

BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
String output;
while ((output = br.readLine()) != null) {
    System.out.println(output);
}`
        }
    };

    const CodeBlock = ({ code, language = "plaintext" }: { code: string; language?: string }) => (
        <div className="relative">
            <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{code}</code>
            </pre>
            <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => handleCopy(code)}
            >
                <Copy className="w-4 h-4" />
            </Button>
        </div>
    );

    return (
        <DashboardLayout>
            <div className="p-6 max-w-5xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">API Documentation</h1>

                {/* API Info */}
                <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2 text-sm text-muted-foreground">HTTP Method</h3>
                            <code className="bg-muted/50 px-3 py-2 rounded inline-block">POST</code>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Response Format</h3>
                            <code className="bg-muted/50 px-3 py-2 rounded inline-block">JSON</code>
                        </div>
                    </div>
                </Card>

                {/* API Credentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <h3 className="font-semibold mb-2 text-muted-foreground text-sm">API URL</h3>
                        <div className="flex items-center space-x-2">
                            <code className="flex-1 bg-muted/50 p-3 rounded text-sm font-mono break-all">
                                {apiUrl}
                            </code>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleCopy(apiUrl)}
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="font-semibold mb-2 text-muted-foreground text-sm">API Key</h3>
                        <div className="flex items-center space-x-2">
                            <code className="flex-1 bg-muted/50 p-3 rounded text-sm font-mono truncate">
                                {apiKey}
                            </code>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleCopy(apiKey)}
                                disabled={!user?.apiKey}
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleGenerateApiKey}
                                disabled={generating}
                                title={user?.apiKey ? "Regenerate API Key" : "Generate API Key"}
                            >
                                <RefreshCw className={`w-4 h-4 ${generating ? 'animate-spin' : ''}`} />
                            </Button>
                        </div>
                        {!user?.apiKey && (
                            <p className="text-xs text-muted-foreground mt-2">
                                Click the refresh icon to generate your API key
                            </p>
                        )}
                    </Card>
                </div>

                {/* Service List */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Service List</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">services</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Example Code</h3>
                            <Tabs defaultValue="php" className="w-full">
                                <TabsList className="mb-3">
                                    <TabsTrigger value="php">PHP</TabsTrigger>
                                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                    <TabsTrigger value="python">Python</TabsTrigger>
                                    <TabsTrigger value="java">Java</TabsTrigger>
                                </TabsList>
                                <TabsContent value="php">
                                    <CodeBlock code={codeExamples.services.php} />
                                </TabsContent>
                                <TabsContent value="javascript">
                                    <CodeBlock code={codeExamples.services.javascript} />
                                </TabsContent>
                                <TabsContent value="python">
                                    <CodeBlock code={codeExamples.services.python} />
                                </TabsContent>
                                <TabsContent value="java">
                                    <CodeBlock code={codeExamples.services.java} />
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`[
  {
    "service": 1,
    "name": "Followers",
    "type": "Default",
    "category": "First Category",
    "rate": "0.90",
    "min": "50",
    "max": "10000",
    "refill": true,
    "cancel": true
  },
  {
    "service": 2,
    "name": "Comments",
    "type": "Custom Comments",
    "category": "Second Category",
    "rate": "8",
    "min": "10",
    "max": "1500",
    "refill": false,
    "cancel": true
  }
]`} />
                        </div>
                    </div>
                </Card>

                {/* Add Order */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Add Order</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">add</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">service</code></td>
                                        <td className="p-2 text-muted-foreground">Service ID</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">link</code></td>
                                        <td className="p-2 text-muted-foreground">Link to page</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">quantity</code></td>
                                        <td className="p-2 text-muted-foreground">Needed quantity</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">runs</code></td>
                                        <td className="p-2 text-muted-foreground">Runs to deliver (optional)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">interval</code></td>
                                        <td className="p-2 text-muted-foreground">Interval in minutes (optional)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Example Code</h3>
                            <Tabs defaultValue="php" className="w-full">
                                <TabsList className="mb-3">
                                    <TabsTrigger value="php">PHP</TabsTrigger>
                                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                    <TabsTrigger value="python">Python</TabsTrigger>
                                    <TabsTrigger value="java">Java</TabsTrigger>
                                </TabsList>
                                <TabsContent value="php">
                                    <CodeBlock code={codeExamples.addOrder.php} />
                                </TabsContent>
                                <TabsContent value="javascript">
                                    <CodeBlock code={codeExamples.addOrder.javascript} />
                                </TabsContent>
                                <TabsContent value="python">
                                    <CodeBlock code={codeExamples.addOrder.python} />
                                </TabsContent>
                                <TabsContent value="java">
                                    <CodeBlock code={codeExamples.addOrder.java} />
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "order": 23501
}`} />
                        </div>
                    </div>
                </Card>

                {/* Order Status */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Status</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">status</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">order</code></td>
                                        <td className="p-2 text-muted-foreground">Order ID</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Example Code</h3>
                            <Tabs defaultValue="php" className="w-full">
                                <TabsList className="mb-3">
                                    <TabsTrigger value="php">PHP</TabsTrigger>
                                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                    <TabsTrigger value="python">Python</TabsTrigger>
                                    <TabsTrigger value="java">Java</TabsTrigger>
                                </TabsList>
                                <TabsContent value="php">
                                    <CodeBlock code={codeExamples.status.php} />
                                </TabsContent>
                                <TabsContent value="javascript">
                                    <CodeBlock code={codeExamples.status.javascript} />
                                </TabsContent>
                                <TabsContent value="python">
                                    <CodeBlock code={codeExamples.status.python} />
                                </TabsContent>
                                <TabsContent value="java">
                                    <CodeBlock code={codeExamples.status.java} />
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "charge": "0.27819",
  "start_count": "3572",
  "status": "Partial",
  "remains": "157",
  "currency": "USD"
}`} />
                        </div>
                    </div>
                </Card>

                {/* Multiple Orders Status */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Multiple Orders Status</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">status</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">orders</code></td>
                                        <td className="p-2 text-muted-foreground">Order IDs (separated by comma, up to 100)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "1": {
    "charge": "0.27819",
    "start_count": "3572",
    "status": "Partial",
    "remains": "157",
    "currency": "USD"
  },
  "10": {
    "error": "Incorrect order ID"
  },
  "100": {
    "charge": "1.44219",
    "start_count": "234",
    "status": "In progress",
    "remains": "10",
    "currency": "USD"
  }
}`} />
                        </div>
                    </div>
                </Card>

                {/* Create Refill */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Create Refill</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">refill</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">order</code></td>
                                        <td className="p-2 text-muted-foreground">Order ID</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "refill": "1"
}`} />
                        </div>
                    </div>
                </Card>

                {/* Create Multiple Refill */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Create Multiple Refill</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">refill</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">orders</code></td>
                                        <td className="p-2 text-muted-foreground">Order IDs (separated by comma, up to 100)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`[
  {
    "order": 1,
    "refill": 1
  },
  {
    "order": 2,
    "refill": 2
  },
  {
    "order": 3,
    "refill": {
      "error": "Incorrect order ID"
    }
  }
]`} />
                        </div>
                    </div>
                </Card>

                {/* Get Refill Status */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Get Refill Status</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">refill_status</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">refill</code></td>
                                        <td className="p-2 text-muted-foreground">Refill ID</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "status": "Completed"
}`} />
                        </div>
                    </div>
                </Card>

                {/* Get Multiple Refill Status */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Get Multiple Refill Status</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">refill_status</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">refills</code></td>
                                        <td className="p-2 text-muted-foreground">Refill IDs (separated by comma, up to 100)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`[
  {
    "refill": 1,
    "status": "Completed"
  },
  {
    "refill": 2,
    "status": "Rejected"
  },
  {
    "refill": 3,
    "status": {
      "error": "Refill not found"
    }
  }
]`} />
                        </div>
                    </div>
                </Card>

                {/* Create Cancel */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Create Cancel</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">cancel</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">orders</code></td>
                                        <td className="p-2 text-muted-foreground">Order IDs (separated by comma, up to 100)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`[
  {
    "order": 9,
    "cancel": {
      "error": "Incorrect order ID"
    }
  },
  {
    "order": 2,
    "cancel": 1
  }
]`} />
                        </div>
                    </div>
                </Card>

                {/* User Balance */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">User Balance</h2>
                    <div className="space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-semibold">Parameters</th>
                                        <th className="text-left p-2 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">key</code></td>
                                        <td className="p-2 text-muted-foreground">Your API key</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2"><code className="bg-muted/50 px-2 py-1 rounded">action</code></td>
                                        <td className="p-2 text-muted-foreground">balance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Example Code</h3>
                            <Tabs defaultValue="php" className="w-full">
                                <TabsList className="mb-3">
                                    <TabsTrigger value="php">PHP</TabsTrigger>
                                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                    <TabsTrigger value="python">Python</TabsTrigger>
                                    <TabsTrigger value="java">Java</TabsTrigger>
                                </TabsList>
                                <TabsContent value="php">
                                    <CodeBlock code={codeExamples.balance.php} />
                                </TabsContent>
                                <TabsContent value="javascript">
                                    <CodeBlock code={codeExamples.balance.javascript} />
                                </TabsContent>
                                <TabsContent value="python">
                                    <CodeBlock code={codeExamples.balance.python} />
                                </TabsContent>
                                <TabsContent value="java">
                                    <CodeBlock code={codeExamples.balance.java} />
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Example Response</h3>
                            <CodeBlock code={`{
  "balance": "100.84292",
  "currency": "USD"
}`} />
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default API;
