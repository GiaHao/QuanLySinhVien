function DanhSachSinhVien() {
  this.mangSinhVien = [];

  this.them = function(sinhVien) {
    this.mangSinhVien.push(sinhVien);
  };

  this.xoa = function(mangSV) {
    for (var i = 0; i < mangSV.length; i++) {
      for (var j = 0; j < this.mangSinhVien.length; j++) {
        if(mangSV[i] == this.mangSinhVien[j].mssv) {
          this.mangSinhVien.splice(j, 1);
        }
      }
    }
  };

  this.sua = function(maso, sinhvien) {
    for (var i = 0; i < this.mangSinhVien.length; i++) {
      if(this.mangSinhVien[i].mssv == maso) {
        // this.mangSinhVien[i].hoTen = sinhvien.hoTen;
        // this.mangSinhVien[i].email = sinhvien.email;
        // this.mangSinhVien[i].soDienThoai = sinhvien.soDienThoai;
        // this.mangSinhVien[i].chuyenNganh = sinhvien.chuyenNganh;
        // this.mangSinhVien[i].toan = sinhvien.toan;
        // this.mangSinhVien[i].ly = sinhvien.ly;
        // this.mangSinhVien[i].hoa = sinhvien.hoa;
        this.mangSinhVien[i] = sinhvien;
      }
    } 
  };

  this.timKiem = function(tukhoa, value) {
    var dsSinhVienTimThay = new DanhSachSinhVien();
    tukhoa = change_alias(tukhoa);
    if(value == 'ten') {
      for (var i = 0; i < this.mangSinhVien.length; i++) {
        var hoten = change_alias(this.mangSinhVien[i].hoTen);
        if(hoten.search(tukhoa) != -1) {
          dsSinhVienTimThay.them(this.mangSinhVien[i]);
        }
      }
    } else if(value == 'ma') {
      for (var i = 0; i < this.mangSinhVien.length; i++) {
        if(this.mangSinhVien[i].mssv.search(tukhoa) != -1) {
          dsSinhVienTimThay.them(this.mangSinhVien[i]);
        }
      }
    }
    return dsSinhVienTimThay;
  }

  this.sapXepChuyenNganh = function(tukhoa) {
    var dsSinhVienChuyenNganh = new DanhSachSinhVien();
    for (var i = 0; i < this.mangSinhVien.length; i++) {
      if (this.mangSinhVien[i].chuyenNganh == tukhoa) {
        dsSinhVienChuyenNganh.them(this.mangSinhVien[i]);
      }
    }
    return dsSinhVienChuyenNganh;
  }
}