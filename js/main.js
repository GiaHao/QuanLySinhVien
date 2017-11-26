var danhSachSV = new DanhSachSinhVien();

function themSinhVien() {
  var maSV = document.getElementById('mssv').value;
  var hoTen = document.getElementById('hoTen').value;
  var email = document.getElementById('email').value;
  var soDienThoai = document.getElementById('soDienThoai').value;
  var chuyenNganh = document.getElementById('chuyenNganh').value;
  var diemToan = document.getElementById('diemToan').value;
  var diemLy = document.getElementById('diemLy').value;
  var diemHoa = document.getElementById('diemHoa').value;

  var sinhVien = new SinhVien(maSV, hoTen, soDienThoai, email, chuyenNganh, diemToan, diemLy, diemHoa);
  
  if (KiemTraHoTen() && kiemTraMSSV() && KiemTraSoDT() && kiemTraChuyenNganh()
  && KiemTraHoa() && KiemTraToan() && KiemTraLy() && KiemTraEmail()) {
    danhSachSV.them(sinhVien);
    capNhatDanhSach(danhSachSV);
    swal("Thêm thành công!", {
       buttons: false,
       icon: "success",
       timer: 2000,
     });
   } else {
    swal("Thêm không thành công!", {
      buttons: false,
      icon: "error",
      timer: 2000,
    });
   }


}

function xoaSinhVien() {
  var flag = 0;
  var checkbox = document.getElementsByClassName("custom-control-input");
  var maSV = [];
  for (var i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked) {
      maSV.push(checkbox[i].id);
      flag++;
    }
  }

  if (flag == 0) {
    swal("Vui lòng chọn trước!", {
      buttons: false,
      icon: "error",
      timer: 2000,
    });
  } else if (flag >= 1) {
    swal({
      title: "Bạn có muốn xóa không?",
      text: "Dữ liệu đã xóa không thể khôi phục!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        danhSachSV.xoa(maSV);
        swal("Sinh viên bạn chọn đã xóa!", {
          icon: "success",
          buttons: false,
          timer: 2000,
        });
        capNhatDanhSach(danhSachSV);
      }
    });
  }
}

function fillDuLieu() {
  var flag = 0;
  var maso;
  var chkMaSo = document.getElementsByClassName('custom-control-input');
  var btnSua = document.getElementById('sua');
  for (var i = 0; i < chkMaSo.length; i++) {
    if (chkMaSo[i].checked) {
      flag++;
      maso = chkMaSo[i].id;
    }
  }

  if (flag == 0) {
    btnSua.disabled = true;
    swal("Vui lòng chọn trước!", {
      buttons: false,
      icon: "error",
      timer: 2000,
    });
  } else if (flag > 1) {
    btnSua.disabled = true;
    swal("Chỉ có thể chọn 1 thôi!", {
      buttons: false,
      icon: "error",
      timer: 2000,
    });
  }

  for (var j = 0; j < danhSachSV.mangSinhVien.length; j++) {
    if (danhSachSV.mangSinhVien[j].mssv == maso) {
      document.getElementById('modal-mssv').value = danhSachSV.mangSinhVien[j].mssv;
      document.getElementById('modal-hoTen').value = danhSachSV.mangSinhVien[j].hoTen;
      document.getElementById('modal-email').value = danhSachSV.mangSinhVien[j].email;
      document.getElementById('modal-soDienThoai').value = danhSachSV.mangSinhVien[j].soDienThoai;
      document.getElementById('modal-chuyenNganh').value = danhSachSV.mangSinhVien[j].chuyenNganh;
      document.getElementById('modal-diemToan').value = danhSachSV.mangSinhVien[j].toan;
      document.getElementById('modal-diemLy').value = danhSachSV.mangSinhVien[j].ly;
      document.getElementById('modal-diemHoa').value = danhSachSV.mangSinhVien[j].hoa;
    }
  }
}

function checkChange() {
  var btnSua = document.getElementById("sua");
  btnSua.disabled = false;
}

function suaSinhVien() {
  var maSo = document.getElementById('modal-mssv').value;
  var hoTen = document.getElementById('modal-hoTen').value;
  var email = document.getElementById('modal-email').value;
  var soDienThoai = document.getElementById('modal-soDienThoai').value;
  var chuyenNganh = document.getElementById('modal-chuyenNganh').value;
  var diemToan = document.getElementById('modal-diemToan').value;
  var diemLy = document.getElementById('modal-diemLy').value;
  var diemHoa = document.getElementById('modal-diemHoa').value;

  var sinhVien = new SinhVien(maSo, hoTen, soDienThoai, email, chuyenNganh, diemToan, diemLy, diemHoa);
  
  swal({
    title: "Bạn có muốn sửa thông tin lại không?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      danhSachSV.sua(maSo, sinhVien);
      swal("Sinh viên bạn chọn đã xóa!", {
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      capNhatDanhSach(danhSachSV);
    }
  });
}

function taoTheTd(value) {
  var td = document.createElement('td');
  td.innerHTML = value;
  return td;
}

function capNhatDanhSach(dsSinhVien) {
  var table = document.getElementById('tableBody');
  table.innerHTML = '';
  
  for (var i = 0; i < dsSinhVien.mangSinhVien.length; i++) {
    var sv = dsSinhVien.mangSinhVien[i];
    var row = document.createElement('tr');
    var tdChon = document.createElement('td');
    var tdMasv = taoTheTd(sv.mssv);
    var tdHoten = taoTheTd(sv.hoTen);
    var tdSodienthoai = taoTheTd(sv.soDienThoai);
    var tdEmail = taoTheTd(sv.email);
    var tdChuyennganh = taoTheTd(sv.chuyenNganh);
    var tdDiem = taoTheTd(sv.diemTB());
    var tdXeploai = taoTheTd(sv.xepLoai());
    
    // Tạo custom checkbox
    var label = document.createElement('label');
    label.setAttribute("class", "custom-control custom-checkbox");
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = "custom-control-input";
    checkBox.id = dsSinhVien.mangSinhVien[i].mssv;
    checkBox.setAttribute("onchange", "checkChange()");
    var span = document.createElement('span');
    span.className = "custom-control-indicator";
    label.appendChild(checkBox);
    label.appendChild(span);

    tdChon.appendChild(label);
    row.appendChild(tdChon);
    row.appendChild(tdMasv);
    row.appendChild(tdHoten);
    row.appendChild(tdSodienthoai);
    row.appendChild(tdEmail);
    row.appendChild(tdChuyennganh);
    row.appendChild(tdDiem);
    row.appendChild(tdXeploai);

    table.appendChild(row);
  }
}

function timKiemSinhVien() {
  var tukhoa = document.getElementById('inputName').value;
  var timTheo = document.getElementById('timTheo').value;
  var dsSinhVienTimDuoc = danhSachSV.timKiem(tukhoa, timTheo);
  capNhatDanhSach(dsSinhVienTimDuoc);
}

// Lọc ra danh sách sinh viên theo chuyên ngành
function sapXepTheoChuyenNganh() {
  var tukhoa = document.getElementById('sapXepTheoNganh').value;
  if (tukhoa == 'all') {
    capNhatDanhSach(danhSachSV);
  } else {
    var dsSinhVienChuyenNganh = danhSachSV.sapXepChuyenNganh(tukhoa);
    capNhatDanhSach(dsSinhVienChuyenNganh);
  }
}

// Nhấn button thêm mới ở danh sách sinh viên sẽ chuyển sang tab nhập thông tin
function nhapThongTin() {
  var formNhap = document.getElementById('form').classList;
  formNhap.add('active', 'show');
  var tabNhapThongTin = document.getElementById('formNhap').classList;
  tabNhapThongTin.add('active');
  var danhSach = document.getElementById('danhSach').classList;
  danhSach.remove('active');
  var list = document.getElementById('list').classList;
  list.remove('show', 'active');
}

// Chuyển ký tự có dấu thành không dấu
function change_alias(string) {
  var str = string;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  return str;
}

function luuDuLieu() {
  var jsonDanhSachSV = JSON.stringify(danhSachSV.mangSinhVien);
  localStorage.setItem('danhSachSV', jsonDanhSachSV);
}

function layDulieu() {
  danhSachSV.mangSinhVien = JSON.parse(localStorage.getItem('danhSachSV'));
  capNhatDanhSach(danhSachSV);
}