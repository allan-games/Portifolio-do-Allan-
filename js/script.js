function copiarEmail() {
  const email = document.getElementById("email").innerText;

  navigator.clipboard.writeText(email).then(() => {
    document.getElementById("msg").innerText =
      "Email copiado com sucesso!";
  });
}
