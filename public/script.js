document.getElementById('fetchData').addEventListener('click', async () => {
  try {
    const response = await fetch('/api');
    const data = await response.json();
    document.getElementById('serverData').textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
    document.getElementById('serverData').textContent = "Xatolik yuz berdi!";
  }
});
