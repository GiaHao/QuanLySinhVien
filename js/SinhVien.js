function SinhVien(mssv, hoTen, sdt, email, chuyenNganh, toan, ly, hoa) {
  this.mssv = mssv;
  this.hoTen = hoTen;
  this.soDienThoai = sdt;
  this.email = email;
  this.chuyenNganh = chuyenNganh;
  this.toan = parseFloat(toan);
  this.ly = parseFloat(ly);
  this.hoa = parseFloat(hoa);
  this.diemTB = function() {
    return (this.toan + this.ly + this.hoa) / 3;
  };
  this.xepLoai = function() {
    if (this.diemTB() >= 9 && this.diemTB() <= 10) {
      return 'Xuất sắc';
    } else if (this.diemTB() >= 8 && this.diemTB() < 9) {
      return 'Giỏi';
    } else if (this.diemTB() >= 6 && this.diemTB() < 8) {
      return 'Khá';
    } else if (this.diemTB() >= 4 && this.diemTB() < 6) {
      return 'Trung bình';
    } else if (this.diemTB() >= 0 && this.diemTB() < 4) {
      return 'Yếu';
    }
  };
}