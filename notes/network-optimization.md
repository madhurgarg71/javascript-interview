# Network Optimization Techniques

## Lazy loading

### `lazy` attribute:

`lazy` attribute on image tag `<img loading="lazy">`, by default setting is `<img loading="eager">`

### Intersection observer API:

![alt text](image-3.png)

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

![alt text](image-2.png)

```
.content {
  content-visibility: auto;
}
```

### Serving critical css

![alt text](image-4.png)

```
Loading critical css synchronously
<link rel="stylesheet" href="critical.css" />

Loading CSS asynchronously with low priority
<link
  rel="stylesheet" href="full.css" media="print" onload="this.media='all'">
```

## Resource hinting

![alt text](image-5.png)
