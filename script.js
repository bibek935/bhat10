document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launch-btn");
  const pathInput = document.getElementById("program-path");

  launchBtn.addEventListener("click", () => {
    const url = pathInput.value.trim();

    if (!url) {
      alert("index.html の場所を入力してください。");
      return;
    }

    // 別タブ（新しい画面）で開く
    // 発表レイアウトの画面はそのまま残る
    window.open(url, "_blank");
  });
});

