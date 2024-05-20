function createInputFields(size, idPrefix) {
  let html = '';
  for (let i = 0; i < size; i++) {
    html += `<input type="number" id="${idPrefix}${i}" placeholder="Елемент ${i + 1}">`;
  }
  return html;
}

function createArrays() {
  const size1 = document.getElementById('size1').value;
  const size2 = document.getElementById('size2').value;
  const arraysInputDiv = document.getElementById('arraysInput');

  let html = `<h3>Перший масив</h3>${createInputFields(size1, 'arr1')}`;
  html += `<h3>Другий масив</h3>${createInputFields(size2, 'arr2')}`;

  arraysInputDiv.innerHTML = html;
}

function getArrayFromInput(size, idPrefix) {
  let array = [];
  for (let i = 0; i < size; i++) {
    let value = document.getElementById(`${idPrefix}${i}`).value;
    if (value) {
      array.push(parseInt(value));
    }
  }
  return array;
}

function findMinCommonElement(arr1, arr2) {
  let commonElements = arr1.filter(value => arr2.includes(value));
  if (commonElements.length > 0) {
    return Math.min(...commonElements);
  }
  return null;
}

function bubbleSort(arr) {
  let sortedArray = [...arr];
  let n = sortedArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }
  return sortedArray;
}

function processArrays() {
  const size1 = parseInt(document.getElementById('size1').value);
  const size2 = parseInt(document.getElementById('size2').value);

  const arr1 = getArrayFromInput(size1, 'arr1');
  const arr2 = getArrayFromInput(size2, 'arr2');

  const resultDiv = document.getElementById('result');

  let resultHTML = `<h3>Перший масив: ${arr1}</h3>`;
  let resultHTML2 = `<h3>Другий масив: ${arr2}</h3>`;
  let minCommonElement = findMinCommonElement(arr1, arr2);
  if (minCommonElement !== null) {
    resultHTML2 += `<p>Найменший спільний елемент: ${minCommonElement}</p>`;
  } else {
    resultHTML2 += `<p>Спільних елементів немає</p>`;
  }

  resultHTML += `<h3>Сортування масиву методом бульбашки:</h3>`;
  resultHTML += `<p>Вхідний масив: ${arr1}</p>`;
  let sortedArray = bubbleSort(arr1);
  resultHTML += `<p>Відсортований масив: ${sortedArray}</p>`;

  resultDiv.innerHTML = resultHTML + resultHTML2;
}
