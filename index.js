// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var data = [{ name: 'sanjay' }, { name: 'nisha' }, { name: 'nanu' }];
function openInAppBrowserBlank(item) {
  console.log(item);
}
for (var i = 0; i < data.length; i++) {
  var item = data[i];
  var link = item.name;
  console.log(link);

  $('.dropdown-menu').append(
    `<a onClick="openInAppBrowserBlank('+link+');" class="dropdown-item" href="#">${link}</a>` 
  );
}
