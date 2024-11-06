# Network Optimization Techniques

## Async, Defer

### `async`

Downloads the javascript in parallel and execute once it's downloaded blocking the HTML parsing in between.

`<script async src="app.js"></script>`

### `defer`

Downloads the javascript in parallel and
execute once HTML parsing is done
`<script defer src="app.js"></script>`

## Lazy loading

### `lazy` attribute:

`lazy` attribute on image tag `<img loading="lazy">`, by default setting is `<img loading="eager">`

### Intersection observer API:

<image width="200px" src="image-3.png">

```
function callbackFunction(entries) {
  entries.forEach(entry => {...})
}

let observer = new IntersectionObserver(callbackFunction, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
})
```

### `content-visibility` css property:

<image width="300px" src="image-2.png">

```
.content {
  content-visibility: auto;
}
```

### Serving critical css

<image width="300px" src="image-4.png">

```
Loading critical css synchronously
<link rel="stylesheet" href="critical.css" />

Loading CSS asynchronously with low priority
<link
  rel="stylesheet" href="full.css" media="print" onload="this.media='all'">
```

## Resource hinting

![alt text](image-5.png)

### Preload

Download the resources (css, js) in parallel and execute them once downloaded.

`<link rel="preload" href="style.css">`
<br />
`<link rel="preload" href="critical.js">`

### Prefetch
