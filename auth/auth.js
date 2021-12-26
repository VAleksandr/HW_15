const btn_auth = document.getElementById('btn_auth');
const inp_first = document.getElementById('inp_first');
const inp_last = document.getElementById('inp_last');

btn_auth.onclick = () => {
  const user = {
    first_name: inp_first.value,
    last_name: inp_last.value
  };

  localStorage.setItem('user', JSON.stringify(user));

  window.location = '../home/home.html';
}
