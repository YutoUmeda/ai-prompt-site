(function () {
  // ===== ナビゲーション =====
  var NAV_HTML = `
    <a href="/" class="logo">🎒 ぽけっとプロンプト</a>
    <div class="nav-links">
      <a href="/#categories">職種別</a>
      <a href="/#categories">用途別</a>
      <a href="/#categories">副業</a>
      <a href="/#free-pdf">無料PDF</a>
    </div>`;

  // ===== フッター =====
  var FOOTER_HTML = `
    <p>© 2026 ぽけっとプロンプト by <a href="/about.html" style="color:#70708c;text-decoration:none">nuts</a>. All rights reserved.
    &nbsp;｜&nbsp;<a href="/about.html" style="color:#70708c;text-decoration:none">運営者情報</a></p>`;

  // ===== 置き換え処理 =====
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    if (nav) nav.innerHTML = NAV_HTML;

    var footer = document.querySelector('footer');
    if (footer) footer.innerHTML = FOOTER_HTML;
  });
})();
