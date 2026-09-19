const SUPABASE_URL = "https://qbqabvihdfwsmruicgbj.supabase.co";
const SUPABASE_KEY = "sb_publishable_Y1mJWKBYEScbYcv3LZUfHg_tI8rgmkY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("app.js berhasil dimuat");

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        console.log("Tombol Buat Akun ditekan");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        message.textContent = "Mendaftarkan akun...";

      const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
        emailRedirectTo: "https://rafkysyafrianto17-creator.github.io/s2b2-connect/"
    }
});

        if (error) {
            message.textContent = "Gagal: " + error.message;
            console.error(error);
            return;
        }

        message.textContent = "Pendaftaran berhasil! Silakan cek email untuk verifikasi.";
        console.log("Pendaftaran berhasil", data);

    });
} else {
    console.error("Register form tidak ditemukan!");
}
