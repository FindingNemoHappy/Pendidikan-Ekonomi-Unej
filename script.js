document.addEventListener("DOMContentLoaded", function() {
    const showRetnaButton = document.getElementById("show-retna");
    const showHetyButton = document.getElementById("show-hety");
    const showJokoButton = document.getElementById("show-joko");
// ---------------------baru-----------------------
    const showTiaraButton = document.getElementById("show-tiara");
    const showLindaButton = document.getElementById("show-linda");
    const showLisanaButton = document.getElementById("show-lisana");
    const showTitinButton = document.getElementById("show-titin");
    const showIrmaButton = document.getElementById("show-irma");


    const imageRetna = document.getElementById("image-retna");
    const imageHety = document.getElementById("image-hety");
    const imageJoko = document.getElementById("image-joko");
    // ---------------------baru-----------------------
    const imageTiara = document.getElementById("image-tiara");
    const imageLinda = document.getElementById("image-linda");
    const imageLisana = document.getElementById("image-lisana");
    const imageTitin = document.getElementById("image-titin");
    const imageIrma = document.getElementById("image-irma");


    const downloadRetnaButton = document.getElementById("download-retna");
    const downloadHetyButton = document.getElementById("download-hety");
    const downloadJokoButton = document.getElementById("download-joko");
// ---------------------baru-----------------------
    const downloadTiaraButton = document.getElementById("download-tiara");
    const downloadLindaButton = document.getElementById("download-linda");
    const downloadLisanaButton = document.getElementById("download-lisana");
    const downloadTitinButton = document.getElementById("download-titin");
    const downloadIrmaButton = document.getElementById("download-irma");
   
    

    showRetnaButton.addEventListener("click", () => {
       imageRetna.style.display = "block";
       imageHety.style.display = "none";
       imageJoko.style.display = "none";
       imageTiara.style.display = "none";
       imageLinda.style.display = "none";
       imageLisana.style.display = "none";
       imageTitin.style.display = "none";
       imageIrma.style.display = "none";
       // Mengubah warna tombol menjadi crimson
       showRetnaButton.style.backgroundColor = "crimson";
       showHetyButton.style.backgroundColor = ""; // Menghapus warna tombol Hety
       showJokoButton.style.backgroundColor = ""; 
       showTiaraButton.style.backgroundColor = ""; 
       showLindaButton.style.backgroundColor = ""; 
       showLisanaButton.style.backgroundColor = ""; 
       showTitinButton.style.backgroundColor = ""; 
       showIrmaButton.style.backgroundColor = ""; 

       // Menampilkan tombol download yang sesuai
       downloadRetnaButton.style.display = "block";
       downloadHetyButton.style.display = "none"; // Sembunyikan tombol download Hety
       downloadJokoButton.style.display = "none";
       downloadTiaraButton.style.display = "none"; 
       downloadLindaButton.style.display = "none"; 
       downloadLisanaButton.style.display = "none"; 
       downloadTitinButton.style.display = "none"; 
       downloadIrmaButton.style.display = "none"; 

       window.scrollTo({
            top: imageRetna.offsetTop,
            behavior: 'smooth'
       });

    });

    showHetyButton.addEventListener("click", () => {
       imageHety.style.display = "block";
       imageRetna.style.display = "none";
       imageJoko.style.display = "none";
       imageTiara.style.display = "none";
       imageLinda.style.display = "none";
       imageLisana.style.display = "none";
       imageTitin.style.display = "none";
       imageIrma.style.display = "none";
       // Mengubah warna tombol menjadi crimson
       showHetyButton.style.backgroundColor = "crimson";
       showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
       showJokoButton.style.backgroundColor = "";
       showTiaraButton.style.backgroundColor = ""; 
       showLindaButton.style.backgroundColor = ""; 
       showLisanaButton.style.backgroundColor = ""; 
       showTitinButton.style.backgroundColor = ""; 
       showIrmaButton.style.backgroundColor = "";

       // Menampilkan tombol download yang sesuai
       downloadHetyButton.style.display = "block";
       downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
       downloadJokoButton.style.display = "none";
       downloadTiaraButton.style.display = "none"; 
       downloadLindaButton.style.display = "none"; 
       downloadLisanaButton.style.display = "none"; 
       downloadTitinButton.style.display = "none"; 
       downloadIrmaButton.style.display = "none"; 

       window.scrollTo({
         top: imageHety.offsetTop,
         behavior: 'smooth'
    });

    });

    showJokoButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "block";
      imageTiara.style.display = "none";
      imageLinda.style.display = "none";
      imageLisana.style.display = "none";
      imageTitin.style.display = "none";
      imageIrma.style.display = "none";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "crimson";
      showTiaraButton.style.backgroundColor = ""; 
      showLindaButton.style.backgroundColor = ""; 
      showLisanaButton.style.backgroundColor = ""; 
      showTitinButton.style.backgroundColor = ""; 
      showIrmaButton.style.backgroundColor = "";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "block";
      downloadTiaraButton.style.display = "none"; 
      downloadLindaButton.style.display = "none"; 
      downloadLisanaButton.style.display = "none"; 
      downloadTitinButton.style.display = "none"; 
      downloadIrmaButton.style.display = "none"; 

      window.scrollTo({
        top: imageJoko.offsetTop,
        behavior: 'smooth'
   });

   });

   showTiaraButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "none";
      imageTiara.style.display = "block";
      imageLinda.style.display = "none";
      imageLisana.style.display = "none";
      imageTitin.style.display = "none";
      imageIrma.style.display = "none";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "";
      showTiaraButton.style.backgroundColor = "crimson"; 
      showLindaButton.style.backgroundColor = ""; 
      showLisanaButton.style.backgroundColor = ""; 
      showTitinButton.style.backgroundColor = ""; 
      showIrmaButton.style.backgroundColor = "";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "none";
      downloadTiaraButton.style.display = "block"; 
      downloadLindaButton.style.display = "none"; 
      downloadLisanaButton.style.display = "none"; 
      downloadTitinButton.style.display = "none"; 
      downloadIrmaButton.style.display = "none"; 

      window.scrollTo({
        top: imageTiara.offsetTop,
        behavior: 'smooth'
   });

   });

   showLindaButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "none";
      imageTiara.style.display = "none";
      imageLinda.style.display = "block";
      imageLisana.style.display = "none";
      imageTitin.style.display = "none";
      imageIrma.style.display = "none";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "";
      showTiaraButton.style.backgroundColor = ""; 
      showLindaButton.style.backgroundColor = "crimson"; 
      showLisanaButton.style.backgroundColor = ""; 
      showTitinButton.style.backgroundColor = ""; 
      showIrmaButton.style.backgroundColor = "";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "none";
      downloadTiaraButton.style.display = "none"; 
      downloadLindaButton.style.display = "block"; 
      downloadLisanaButton.style.display = "none"; 
      downloadTitinButton.style.display = "none"; 
      downloadIrmaButton.style.display = "none"; 

      window.scrollTo({
        top: imageLinda.offsetTop,
        behavior: 'smooth'
   });

   });

   showLisanaButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "none";
      imageTiara.style.display = "none";
      imageLinda.style.display = "none";
      imageLisana.style.display = "block";
      imageTitin.style.display = "none";
      imageIrma.style.display = "none";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "";
      showTiaraButton.style.backgroundColor = ""; 
      showLindaButton.style.backgroundColor = ""; 
      showLisanaButton.style.backgroundColor = "crimson"; 
      showTitinButton.style.backgroundColor = ""; 
      showIrmaButton.style.backgroundColor = "";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "none";
      downloadTiaraButton.style.display = "none"; 
      downloadLindaButton.style.display = "none"; 
      downloadLisanaButton.style.display = "crimson"; 
      downloadTitinButton.style.display = "none"; 
      downloadIrmaButton.style.display = "none"; 

      window.scrollTo({
        top: imageLisana.offsetTop,
        behavior: 'smooth'
   });

   });

   showTitinButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "none";
      imageTiara.style.display = "none";
      imageLinda.style.display = "none";
      imageLisana.style.display = "none";
      imageTitin.style.display = "block";
      imageIrma.style.display = "none";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "";
      showTiaraButton.style.backgroundColor = ""; 
      showLindaButton.style.backgroundColor = ""; 
      showLisanaButton.style.backgroundColor = ""; 
      showTitinButton.style.backgroundColor = "crimson"; 
      showIrmaButton.style.backgroundColor = "";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "none";
      downloadTiaraButton.style.display = "none"; 
      downloadLindaButton.style.display = "none"; 
      downloadLisanaButton.style.display = "none"; 
      downloadTitinButton.style.display = "crimson"; 
      downloadIrmaButton.style.display = "none"; 

      window.scrollTo({
        top: imageTitin.offsetTop,
        behavior: 'smooth'
   });

   });

   showIrmaButton.addEventListener("click", () => {
      imageHety.style.display = "none";
      imageRetna.style.display = "none";
      imageJoko.style.display = "none";
      imageTiara.style.display = "none";
      imageLinda.style.display = "none";
      imageLisana.style.display = "none";
      imageTitin.style.display = "none";
      imageIrma.style.display = "block";
      // Mengubah warna tombol menjadi crimson
      showHetyButton.style.backgroundColor = "";
      showRetnaButton.style.backgroundColor = ""; // Menghapus warna tombol Retna
      showJokoButton.style.backgroundColor = "";
      showTiaraButton.style.backgroundColor = ""; 
      showLindaButton.style.backgroundColor = ""; 
      showLisanaButton.style.backgroundColor = ""; 
      showTitinButton.style.backgroundColor = ""; 
      showIrmaButton.style.backgroundColor = "crimson";

      // Menampilkan tombol download yang sesuai
      downloadHetyButton.style.display = "none";
      downloadRetnaButton.style.display = "none"; // Sembunyikan tombol download Retna
      downloadJokoButton.style.display = "none";
      downloadTiaraButton.style.display = "none"; 
      downloadLindaButton.style.display = "none"; 
      downloadLisanaButton.style.display = "none"; 
      downloadTitinButton.style.display = "none"; 
      downloadIrmaButton.style.display = "crimson"; 

      window.scrollTo({
        top: imageIrma.offsetTop,
        behavior: 'smooth'
   });

   });

   //  ---------- Ini buat geser keatas------------
   window.onscroll = function () {
      scrollFunction();
   };

   function scrollFunction () {
      var scrollKeatas = document.getElementById("scroll-keatas");

      // ------menampilkan tombol saat 10% kebawah-----
      if (document.body.scrollTop > window.innerHeight * 0.5 || document.documentElement.scrollTop > window.innerHeight * 0.5){
         scrollKeatas.style.display = "block";
      } else {
         scrollKeatas.style.display = "none";
      }
   }

   document.getElementById("scroll-keatas").addEventListener("click", function() {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   })
   
});
