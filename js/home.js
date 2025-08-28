/* ================= Heart Icon Count ================= */
document.querySelectorAll(".card-heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const heartCountNav = document.getElementById("heart-count-nav");
    const count = parseInt(heartCountNav.innerText) || 0;
    heartCountNav.innerText = count + 1;
  });
});

/* ================= Copy Button ================= */
document.querySelectorAll(".copy-btn-text").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".w-full.max-w-sm");
    const serviceNumber = card
      .querySelector(".service-number")
      .innerText.trim();

    navigator.clipboard
      .writeText(serviceNumber)
      .then(() => {
        const copyNumberNav = document.getElementById("copy-number-nav");
        copyNumberNav.innerText = parseInt(copyNumberNav.innerText) + 1;
        alert(`Service number copied: ${serviceNumber}`);
      })
      .catch(() => alert("Failed to copy service number"));
  });
});

/* ================= Call Button ================= */
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".w-full.max-w-sm");
    const serviceName = card.querySelector(".service-name").innerText;
    const sliceServiceNave = serviceName.slice(0, 10);
    const serviceNumber = card.querySelector(".service-number").innerText;

    const coinCountNav = document.querySelector(".coin-count-nav");
    let coins = parseInt(coinCountNav.innerText);

    if (coins < 20) {
      alert("📞 Minimum coin is 20!");
      return;
    }

    coins -= 20;
    coinCountNav.innerText = coins;

    //Date and time
    const historyDiv = document.querySelector(".history-div");
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    // Add to Call History
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="mt-4 p-2 lg:p-4 rounded-lg bg-gray-200">
      <h3 class="font-bold text-base md:text-xs lg:text-base">${serviceName}</h3>
      <div class="flex justify-between items-center">
        <p class="text-sm mt-1">${serviceNumber}</p>
        <p class="font-semibold text-sm pb-3">${formattedDate}</p>
      </div>
      </div>
    `;
    historyDiv.appendChild(div);

    alert(`📞 Calling... ${serviceName} : ${serviceNumber}`);
  });
});

/* ================= Clear Call History ================= */
document.getElementById("clear-button").addEventListener("click", () => {
  document.querySelector(".history-div").innerHTML = "";
});
