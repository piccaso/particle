const $ = require('jquery');
const dropdown = require('../');

const dropHTML = `
<div class="dropdown">
  <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenuButton">Dropdown button</button>
  <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item " href="#">Action</a>
    <a class="dropdown-item " href="#">Another Action</a>
    <a class="dropdown-item " href="#">Something else here</a>
  </div>
</div>
`;

test('dropdown component is registered', () => {
  expect(dropdown.name).toBe('dropdown');
});

test('dropdown menu on button click', () => {
  document.body.innerHTML = dropHTML;
  dropdown.enable($(document));

  // `show` class should NOT start out on dropdowns
  expect($('.dropdown, .dropdown-menu').hasClass('show')).not.toBe(true);
  // attributes are strings, not booleans
  expect($('.dropdown-toggle').attr('aria-expanded')).toBe('false');
});

test('dropdown menu starts out hidden', () => {
  document.body.innerHTML = dropHTML;
  dropdown.enable($(document));

  $('#dropdownMenuButton').click();
  expect($('.dropdown, .dropdown-menu').hasClass('show')).toBe(true);
  expect($('.dropdown-toggle').attr('aria-expanded')).toBe('true');
});
