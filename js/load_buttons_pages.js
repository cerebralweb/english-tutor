document.addEventListener('DOMContentLoaded', function () {
    var html = `
  <div class="container">
    <a href="/index.html" class="button"><span class="label">Home</span></a>
    <a href="/index.html#method" class="button"><span class="label">Method</span></a>
  </div>
`;
;
    document.body.insertAdjacentHTML('afterbegin', html);
  });