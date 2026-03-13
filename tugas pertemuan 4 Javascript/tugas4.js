class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  getDetail() {
    return `Nama: ${this.nama.padEnd(15)} | Telp: ${this.nomorTelepon.padEnd(13)} | Kendaraan: ${this.kendaraanDisewa}`;
  }
}

class ManajemenTransportasi {
  constructor() {
    this.daftarPenyewa = [];
  }

  catatTransaksi(nama, telepon, kendaraan) {
    const pelangganBaru = new Pelanggan(nama, telepon, kendaraan);
    this.daftarPenyewa.push(pelangganBaru);
    console.log(`[SISTEM] Transaksi berhasil dicatat untuk: ${nama}`);
  }

  tampilkanDaftarPenyewa() {
    console.log("\n============================================================");
    console.log("       DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN       ");
    console.log("============================================================");

    if (this.daftarPenyewa.length === 0) {
      console.log("Saat ini tidak ada pelanggan yang menyewa.");
    } else {
      this.daftarPenyewa.forEach((pelanggan, index) => {
        console.log(`${index + 1}. ${pelanggan.getDetail()}`);
      });
    }

    console.log("============================================================\n");
  }
}


const appTransportasi = new ManajemenTransportasi();

appTransportasi.catatTransaksi("Herdyawan", "0812345678910", "Toyota Avanza");
appTransportasi.catatTransaksi("Nando Abdi", "089123157815", "Yamaha NMAX");
appTransportasi.catatTransaksi("Fernando", "08343535536646", "Honda Civic");
appTransportasi.catatTransaksi("Hasbi", "08124235346345", "Honda BRV");

appTransportasi.tampilkanDaftarPenyewa();