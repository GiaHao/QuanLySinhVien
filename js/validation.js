                                //VALIDATION
//Các hàm kiểm tra 
function kiemTraRong(giatri)
{
  if(giatri==="")
  {
    return true;
  }
  return false;
}

function kiemTraChu(giatri)
{
  if(isNaN(giatri)==false)
  {
    return true;
  }
  return false;
}

function kiemTraSo(giatri)
{
  if(isNaN(giatri)==true)
  {
    return true;
  }
  return false;
}

function kiemTraEmail(giatri,bieuthuc)
{
  return giatri.test(bieuthuc);
}

function kiemTraSoLuongKyTu(giatri,tu,den)
{
  if(giatri.length>=tu && giatri.length<=den)
  {
    return true;
  }
  return false;
}

// Kiểm tra xem mã số sinh viên có trùng lặp không
function kiemTraMaTrung(value) {
  for (var i = 0; i < danhSachSV.mangSinhVien.length; i++) {
    if (danhSachSV.mangSinhVien[i].mssv == value) {
      return true;
    }
  }
  return false;
}

//Các hàm kiểm tra thông tin nhập vào

function resetTB(idtb){
  var reset = document.getElementById(idtb);
  reset.innerHTML = "";
  reset.classList.remove('animated','flash')
}

function resetTBD(idtbd){
  var reset = document.getElementById(idtbd);
  reset.innerHTML ="";
  reset.classList.remove('animated','flash')
}

function kiemTraMSSV()
{
  var kq = true;
  var mssv = document.getElementById("mssv").value;
  var thongbao = document.getElementById("thongbaoMSSV");
  if(kiemTraRong(mssv))
  {
    thongbao.innerHTML = "Vui lòng nhập vào MSSV";
    thongbao.style.display = "block";
    thongbao.classList.add('animated','flash')
    kq = false;
  } else if (kiemTraMaTrung(mssv)) {
    thongbao.innerHTML = "Mã số sinh viên đã có";
    thongbao.style.display = "block";
    thongbao.classList.add('animated','flash');
    kq = false;
  }
  return kq;
}

function KiemTraHoTen()
{
  var kq = true;
  var hoten = document.getElementById('hoTen').value;
  var thongbao = document.getElementById("thongbaoHoTen");
  if(kiemTraRong(hoten))
  {
    thongbao.innerHTML = "Vui lòng nhập vào họ tên";
    thongbao.style.display = "block";
    thongbao.classList.add('animated','flash')
    kq = false;
  }
  else if(kiemTraChu(hoten))
  {
    thongbao.innerHTML = "Họ và tên không hợp lệ";
    thongbao.style.display = "block";
    thongbao.classList.add('animated','flash')
    kq = false;
  }
  return kq;
}                           

function KiemTraEmail()
{
  var kq = true;
  var email = document.getElementById('email').value;
  var thongbao = document.getElementById("thongbaoEmail");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(kiemTraRong(email))
  {
    thongbao.innerHTML = "Vui lòng nhập vào email";
    thongbao.classList.add('animated','flash')
    thongbao.style.display = "block";
    kq = false;
  }
  else if(kiemTraEmail(filter, email) == false)
  {
    thongbao.innerHTML = "Email không hợp lệ";
    thongbao.classList.add('animated','flash')
    thongbao.style.display = "block";
    kq = false;
  }
  return kq;
}

function KiemTraSoDT()
{
  var kq = true;
  var sdt = document.getElementById('soDienThoai').value;
  var thongbao = document.getElementById("thongbaoSDT");
  if(kiemTraRong(sdt))
  {
    thongbao.innerHTML = "Vui lòng nhập vào số điện thoại";
    thongbao.classList.add('animated','flash')
    thongbao.style.display = "block";
    kq = false;   
  }
  else if(kiemTraSo(sdt))
  {
    thongbao.innerHTML = "Số điện thoại không hợp lệ";
    thongbao.classList.add('animated','flash')
    thongbao.style.display = "block";
    kq = false;   
  }
  else if(kiemTraSoLuongKyTu(sdt,10,11)==false)
  {
    thongbao.innerHTML = "Số điện thoại phải từ 10 đến 11 ký tự";
    thongbao.classList.add('animated','flash')
    thongbao.style.display = "block";
    kq = false;   
  }
  return kq;
}

function KiemTraToan(){
  var kq = true;
  var thongbaoToan = document.getElementById("thongbaoToan");
  var toan = document.getElementById('diemToan').value;
  if(kiemTraRong(toan))
  {
    thongbaoToan.innerHTML = "Vui lòng nhập vào điểm Toán";
    thongbaoToan.classList.add('animated','flash')
    thongbaoToan.style.display = "block";
    kq = false;   
  }
  else if(isNaN(toan) || isNaN(parseFloat(toan)))
    {
      thongbaoToan.innerHTML = "Điểm toán không hợp lệ";
      thongbaoToan.classList.add('animated','flash');
      thongbaoToan.style.display = "block";
      kq = false;
    }
  else if(parseFloat(toan)>10 || parseFloat(toan)<0){
    thongbaoToan.innerHTML = "Điểm toán phải từ 0 đến 10";
    thongbaoToan.classList.add('animated','flash');
    thongbaoToan.style.display = "block";
    kq = false;     
  }
  return kq;      
}

function KiemTraLy(){
  var kq = true;
  var thongbaoLy = document.getElementById("thongbaoLy");
  var ly = document.getElementById('diemLy').value;
  if(kiemTraRong(ly))
  {
    thongbaoLy.innerHTML = "Vui lòng nhập vào điểm Lý";
    thongbaoLy.classList.add('animated','flash')
    thongbaoLy.style.display = "block";
    kq = false;   
  }
  else if(isNaN(ly) || isNaN(parseFloat(ly)))
    {
      thongbaoLy.innerHTML = "Điểm Lý không hợp lệ";
      thongbaoLy.classList.add('animated','flash');
      thongbaoLy.style.display = "block";
      kq = false;
    }
  else if(parseFloat(ly)>10 || parseFloat(ly)<0){
    thongbaoLy.innerHTML = "Điểm Lý phải từ 0 đến 10";
    thongbaoLy.classList.add('animated','flash');
    thongbaoLy.style.display = "block";
    kq = false;     
  }
  return kq;      
}

function KiemTraHoa(){
  var kq = true;
  var thongbaoHoa = document.getElementById("thongbaoHoa");
  var hoa = document.getElementById('diemHoa').value;
  if(kiemTraRong(hoa))
  {
    thongbaoHoa.innerHTML = "Vui lòng nhập vào điểm Hóa";
    thongbaoHoa.classList.add('animated','flash')
    thongbaoHoa.style.display = "block";
    kq = false;   
  }
  if(isNaN(hoa) || isNaN(parseFloat(hoa)))
    {
      thongbaoHoa.innerHTML = "Điểm Hóa không hợp lệ";
      thongbaoHoa.classList.add('animated','flash');
      thongbaoHoa.style.display = "block";
      kq = false;
    }
  else if(parseFloat(hoa)>10 || parseFloat(hoa)<0){
    thongbaoHoa.innerHTML = "Điểm Hóa phải từ 0 đến 10";
    thongbaoHoa.classList.add('animated','flash');
    thongbaoHoa.style.display = "block";
    kq = false;     
  }
  return kq;      
}

function kiemTraChuyenNganh() {
  var chuyenNganh = document.getElementById('chuyenNganh');
  var alert = document.getElementById('thongbaoChuyenNganh');
  if (chuyenNganh.value == '1') {
    alert.innerHTML = "Vui lòng chọn chuyên ngành";
    alert.classList.add('animated','flash');
    alert.style.display = "block";
    return false;
  } else {
    alert.style.display = "none";
  }
  return true;
}