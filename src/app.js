import decompress from "brotli/decompress";

function decompressPayload(input) {
  const decompressed = decompress(Buffer.from(input, "base64"));
  const text = new TextDecoder().decode(decompressed);
  return text;
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const input = document.querySelector("#input-text");
  const output = document.querySelector("#output-text");
  button?.addEventListener("click", function () {
    const inputText = input?.value;

    if (!inputText) {
      return;
    }

    const outputText = decompressPayload(inputText);
    output.value = outputText;
  });
});
