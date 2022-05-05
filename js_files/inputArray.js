async function InputArray() {
  console.log("InputArray()");
  var element = prompt("Enter number of elements:");
  var inputArray = [];
  for (var i = 0; i < element; i++) {
    inputArray[i] = prompt(`Enter value ${i+1}:`);
  }
  for (var i = 0; i <= element; i++) {
    console.log(inputArray[i]);
  }
}

// module.export={InputArray}

const InpArrbtn = document.querySelector(".InputArray");
InpArrbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await InputArray();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
