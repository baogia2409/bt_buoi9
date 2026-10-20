// const txtInput = document.getElementById("txtInput").value;
// console.log(txtInput);

// Dom tới nút #btnSubmit
// const btnSubmit = document.getElementById("btnSubmit");
// // click vào cái nút
// btnSubmit.onclick = function () {
//   // lấy lại value mới nhất từ input
//   const newValue = document.getElementById("txtInput").value;
//   console.log(newValue);
// };

/**
 * Tinh luong NV
 */
// dom toi nut #btnTinhLuong
const btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
  // Dom tới thẻ #luongNgay lấy value;
  // Dom tới thẻ #soNgayLamViec lấy value;

  const luongNhanVien = document.getElementById("luongNgay").value;  
  const soNgayLamViec = document.getElementById("soNgayLamViec").value;

  let tongTien = 0;
  tongTien = luongNhanVien * soNgayLamViec;

  // convert vnd
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const ketQua = "Tổng tiền lương là: " + formatter.format(tongTien); // "Tổng tiền lương là: 1.000.000 VND"

  // Dom tới thẻ #pThongBao và gán innerHTML = ketQua

  const pThongBao = document.getElementById("pThongBao");
  // Gán innerHTML = ketQua
  pThongBao.innerHTML = ketQua; // "Tổng tiền lương là: 1.000.000 VND"
  // console.log(ketQua);

  // style cho thẻ pThongBao
  // pThongBao.style.backgroundColor = "red";
  // pThongBao.style.color = "white";
  // pThongBao.style.fontSize = "30px";
  // pThongBao.style.fontWeight = "bold";
  // pThongBao.style.textAlign = "center";

  // pThongBao.className = "info test"; // gán class cho thẻ pThongBao
  pThongBao.classList.add("info"); // thêm class cho thẻ pThongBao
  pThongBao.classList.add("test"); // thêm class cho thẻ pThongBao  
};
//   const btnTinhTong = document.getElementById("btnTinhTong");
//   btnTinhTong.onclick = function () {
//     const soThu1 = document.getElementById("soThu1").value;
//     const soThu2 = document.getElementById("soThu2").value;

//     const tong = Number(soThu1) + Number(soThu2); // ép kiểu về number

//     const pKetQua = document.getElementById("pKetQua");
//     pKetQua.innerHTML = "Tổng hai số là: " + tong;

//   pKetQua.classList.add("info"); // thêm class cho thẻ pThongBao
    
// };

const btnTinhTongKySo = document.getElementById("btnTinhTongKySo");
btnTinhTongKySo.onclick = function () {
  const soKySo = document.getElementById("soKySo").value * 1; // ép kiểu về number
  const hangChuc = Math.floor(soKySo / 10); // lấy hàng chục
  const hangDonVi = soKySo % 10; // lấy hàng đơn vị

  const tongKySo = hangChuc + hangDonVi; // tính tổng hai ký tự số
  // // Cách 1: dùng for
  // let tongKySo = 0;
  // for (let i = 0; i < soKySo.length; i++) { // soKySo.length là độ dài của chuỗi
  //   tongKySo += Number(soKySo[i]); // ép kiểu về number
  // }

  // // Cách 2: dùng reduce
  // const tongKySo = soKySo.split("").reduce((tong, kySo) => { // split("") tách chuỗi thành mảng các ký tự (string)
  //   return tong + Number(kySo);
  // }, 0);

  // // Cách 3: dùng forEach
  // let tongKySo = 0;
  // soKySo.split("").forEach((kySo) => {
  //   tongKySo += Number(kySo);
  // });

  // // Cách 4: dùng map
  // const tongKySo = soKySo.split("").map((kySo) => {
  //   return Number(kySo);
  // }).reduce((tong, kySo) => {
  //   return tong + kySo;
  // }, 0);  

// Math.floor(tongKySo); // làm tròn xuống trên  Math.ceil(tongKySo); // làm tròn lên trên

  const pKetQuaKySo = document.getElementById("pKetQuaKySo");
  // pKetQuaKySo.innerHTML = "Tổng các ký số là: " + tongKySo;
  const result = `Tổng 2 ký số là: ${tongKySo}`;

  // pKetQuaKySo.classList.add("info"); // thêm class cho thẻ pThongBao

  pKetQuaKySo.innerHTML = result; // gán innerHTML = result
};
const btnTinhHcn = document.getElementById("btnTinhHcn");
btnTinhHcn.onclick = function () {
  const chieuDai = document.getElementById("chieuDai").value * 1; // ép kiểu về number
  const chieuRong = document.getElementById("chieuRong").value * 1; // ép kiểu về number

  const dienTich = chieuDai * chieuRong; // tính diện tích
  const chuVi = (chieuDai + chieuRong) * 2; // tính chu vi

  const pKetQuaHcn = document.getElementById("pKetQuaHcn");
  pKetQuaHcn.innerHTML = `Diện tích hình chữ nhật là: ${dienTich} <br> Chu vi hình chữ nhật là: ${chuVi}`;
};

const btnTinhTrungBinh = document.getElementById("btnTinhTrungBinh");
btnTinhTrungBinh.onclick = function () {
 const soThu1 = document.getElementById("soThu1TB").value * 1; // ép kiểu về number
 const soThu2 = document.getElementById("soThu2TB").value * 1; // ép kiểu về number
 const soThu3 = document.getElementById("soThu3TB").value * 1; // ép kiểu về number
 const soThu4 = document.getElementById("soThu4TB").value * 1; // ép kiểu về number
 const soThu5 = document.getElementById("soThu5TB").value * 1; // ép kiểu về number

 const trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5; // tính trung bình

 const pKetQuaTrungBinh = document.getElementById("pKetQuaTrungBinh");
 pKetQuaTrungBinh.innerHTML = `Trung bình cộng của 5 số là: ${trungBinh}`;
 
};

// quy đổi tiền USD sang VND
const btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
  const soTien = document.getElementById("soTien").value * 1; // Ép kiểu về number
  const quyDoi = soTien * 23500; // Quy đổi tiền USD sang VND
 
  const pKetQuaQuyDoi = document.getElementById("pKetQuaQuyDoi");
  
  // SỬ DỤNG .toLocaleString('en-US') ĐỂ ĐỊNH DẠNG SỐ TIỀN VND
  pKetQuaQuyDoi.innerHTML = `Tổng tiền USD là: ${soTien} <br> Tổng tiền VND là: ${quyDoi.toLocaleString('en-US')}`;
};
