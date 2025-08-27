/* card-heart-icon-------------------------- */
document
  .getElementById("card-heart-icon")
  .addEventListener("click", function () {
    const heartCountNav = document.getElementById("heart-count-nav");
    const count = parseInt(heartCountNav.innerText);
    const newCount = count + 1;
    heartCountNav.innerText = newCount;
  });

/* call-btn------------ */
document.getElementById("call-btn").addEventListener("click", function () {
  const serviceName = document.getElementById("service-name");
  const serviceNumber = document.getElementById("service-number");
  const historyDiv = document.getElementById("history-div");

  const serviceNameText = serviceName.innerText;
  const serviceNumberText = serviceNumber.innerText;
  const showAlertText = serviceNameText + " " + serviceNumberText;

  const serviceNumberValue = parseInt(serviceNumberText);

  const coinCountNav = document.getElementById("coin-count-nav");
  const coinCountNavNumber = parseInt(coinCountNav.innerText);

  if (coinCountNavNumber < 20) {
    alert("📞 Minimum coin is 20!");
  } else if (coinCountNavNumber > serviceNumberValue) {
    alert("📞 Not enough coins!");
  } else {
    const newCoinCount = coinCountNavNumber - 20;
    coinCountNav.innerText = newCoinCount;

    const div = document.createElement("div");
    div.innerHTML = `
       <div class="mt-4 p-2 md:p-2 lg:p-4 rounded-md bg-gray-200">
                  <h3 class="font-bold text-base md:text-sm lg:text-lg xl:text-xl">${serviceNameText}</h3>
                  <div class="flex justify-between items-center">
                    <p class="text-sm mt-1">${serviceNumberText}</p>
                    <p class="font-semibold pb-3">8-22034</p>
                  </div>
                </div>
     `;
    historyDiv.appendChild(div);
    alert(`📞 Calling... ${showAlertText}`);
  }
});

/* clear-button Call History  -----*/
document.getElementById("clear-button").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.remove();
});
