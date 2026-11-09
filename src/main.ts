Deno.serve(() =>
    new Response('<h1>Welcome to Plethora!</h2', {
        headers: { 'content-type': 'text/html' },
    })
);
