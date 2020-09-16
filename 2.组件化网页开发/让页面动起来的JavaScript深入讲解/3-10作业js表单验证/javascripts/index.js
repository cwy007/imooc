// 辅助方法
function getElem(selector) {
  return document.querySelector(selector);
}

// 顶部
var dropdownToggle = getElem('.dropdown');
var dropdownContent = getElem('.dropdown-content');

dropdownToggle.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
});
dropdownToggle.addEventListener('mouseout', function () {
  dropdownContent.style.display = 'none';
});
dropdownContent.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
})
dropdownContent.addEventListener('mouseout', function () {
  dropdownContent.style.display = 'none';
})

// 主体
