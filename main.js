window.addEventListener('load', () => {
  const paragContent = [
    'This is an inbox layout.',
    'Check one item',
    'Hold down your Shift key',
    'Check a lower item',
    'Everything in between should also be set to checked',
    'Try do it without any libraries',
    'Just regular JavaScript',
    'Good Luck!',
    "Don't forget to tweet your result!",
  ];

  let htmlContent = [];

  for (let i = 0; i <= paragContent.length - 1; i++) {
    htmlContent.push(
      `<div class="item">
        <input type="checkbox" data-index="${i}"/>
        <p>${paragContent[i]}</p>
      </div>`
    );
  }
  document.querySelector('.inbox').innerHTML = htmlContent.join('');

  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  const checkboxArray = [...checkboxes];

  let lastCheckedIdx;
  function handleCheck(e) {
    const currentIndex = this.dataset.index;

    if (e.shiftKey && this.checked) {
      let sorted = [currentIndex, lastCheckedIdx].sort((a, b) => a - b);
      let [smallNum, largeNum] = sorted;

      let selectedTicks = checkboxArray.slice(smallNum, largeNum);

      selectedTicks.forEach((selected) => (selected.checked = true));
    }
    lastCheckedIdx = currentIndex;
  }

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', handleCheck)
  );
});
