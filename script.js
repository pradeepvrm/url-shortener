
const inputUrl = document.getElementById("inputUrl");
const form = document.querySelector("form");
const copyBtn = document.getElementById("copyBtn");
const shortUrl = document.getElementById("shortedUrl");
const originalUrl = document.getElementById("originalUrl");


async function createLink() {
  const endpoint = "https://app.linklyhq.com/api/v1/link";
  const url = inputUrl.value;

  const params = {
    api_key: "yy4Y6sjL/eXf4gAVsVwnFQ==",
    workspace_id: "407802",
    url: url,
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "cache-control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(params)
    });

    const data = await response.json();
    const shortUrl = data.full_url;
    displayShortUrl(shortUrl);

    } catch (error) {
      console.error(error);
    }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createLink();
});

copyBtn.addEventListener("click", () => {
  const copyText = shortUrl.innerText;
  navigator.clipboard.writeText(copyText);
  copyBtn.innerText = "Copied!";
  copyBtn.classList.add("copied");
  copyBtn.disabled = true;
  
  setTimeout(() => {
    copyBtn.innerText = "Copy";
    copyBtn.classList.remove("copied");
    copyBtn.disabled = false;
  }, 5000);
});

function displayShortUrl(url) {
  shortenedUrl.classList.remove("hide");
  originalUrl.innerText = inputUrl.value;
  shortUrl.innerText = url;

  form.reset();
}

