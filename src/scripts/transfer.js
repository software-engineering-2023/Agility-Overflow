function showTransferFields() {
  let transferType = document.getElementById("transferType").value;
  let internalFields = document.getElementById("internalFields");
  let domesticFields = document.getElementById("domesticFields");
  let internationalFields = document.getElementById("internationalFields");

  internalFields.style.display = "none";
  domesticFields.style.display = "none";
  internationalFields.style.display = "none";

  if (transferType === "internal") {
    internalFields.style.display = "block";
  } else if (transferType === "domestic") {
    domesticFields.style.display = "block";
  } else if (transferType === "international") {
    internationalFields.style.display = "block";
  }
}

// const reloadButton = document.getElementById("confirmationButton");

// reloadButton.addEventListener("click", function () {
//   console.log("clicked");
//   location.reload();
// });
