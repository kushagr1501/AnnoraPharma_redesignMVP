fetch('https://annorapharma.com').then(r => r.text()).then(t => { 
  const regex = /(?:src|url)\s*[=(]\s*['"]?([^'"\)>]+)['"]?/ig;
  let match;
  const urls = new Set();
  while ((match = regex.exec(t)) !== null) {
    urls.add(match[1]);
  }
  console.log(Array.from(urls).join('\n'));
});
