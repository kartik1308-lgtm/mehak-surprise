function checkPassword() {
  let password = prompt("Password Enter Karo ❤️");

  if (password === "kahak1236") {
    alert("Welcome Mehak 🥰");

    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#111;color:white;text-align:center;padding:20px;">
        <div>
          <h1>❤️ Happy 5 Years Mehak 🥰</h1>
          <p>Ab yahan tumhari video chalegi.</p>

          <video width="100%" controls>
            <source src="video.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    `;
  } else {
    alert("Wrong Password ❤️");
  }
}