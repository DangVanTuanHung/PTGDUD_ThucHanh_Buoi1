function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
  }
  
  const diemDolphins1 = [96, 108, 89];
  const diemKoalas1 = [88, 91, 110];
  const diemDolphinsBonus1 = [97, 112, 101];
  const diemKoalasBonus1 = [109, 95, 123];
  const diemDolphinsBonus2 = [97, 112, 101];
  const diemKoalasBonus2 = [109, 95, 106];
  
  function xacDinhDoiThang(diemDolphins, diemKoalas) {
    const diemTrungBinhDolphins = tinhDiemTrungBinh(...diemDolphins);
    const diemTrungBinhKoalas = tinhDiemTrungBinh(...diemKoalas);
  
    if (diemTrungBinhDolphins >= 100 && diemTrungBinhDolphins > diemTrungBinhKoalas) {
      console.log("Đội Dolphins thắng với điểm trung bình là: "+diemTrungBinhDolphins);
    } else if (diemTrungBinhKoalas >= 100 && diemTrungBinhKoalas > diemTrungBinhDolphins) {
      console.log("Đội Koalas thắng với điểm trung bình là:: "+diemTrungBinhKoalas);
    } else if (
      diemTrungBinhDolphins === diemTrungBinhKoalas &&
      diemTrungBinhDolphins >= 100 &&
      diemTrungBinhKoalas >= 100
    ) {
      console.log("Hòa! Cả hai đội đều có điểm trung bình là: "+diemTrungBinhDolphins);
    } else {
      console.log("Không đội nào thắng vì không đạt điểm tối thiểu.");
    }
  }
  
  console.log("Dữ liệu kiểm tra 1:");
  xacDinhDoiThang(diemDolphins1, diemKoalas1);
  
  console.log("\nDữ liệu kiểm tra Bonus 1:");
  xacDinhDoiThang(diemDolphinsBonus1, diemKoalasBonus1);
  
  console.log("\nDữ liệu kiểm tra Bonus 2:");
  xacDinhDoiThang(diemDolphinsBonus2, diemKoalasBonus2);
  