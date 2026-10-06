function Button1() {
    function tampilkanpesan() {
        alert("Tombol Berhasil Diklik");
    }
    return (
        <div>
            <h2>Belajar Event</h2>
            <button onClick={tampilkanpesan}>Klik Saya</button>
        </div>
    );
}
export default Button1;