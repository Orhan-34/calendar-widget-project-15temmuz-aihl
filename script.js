var dayLists = document.querySelectorAll("ul");

// Her bir listedeki günleri işle
dayLists.forEach(function (dayList) {
	// Her bir günü seç
	var days = dayList.querySelectorAll("#day");

	// Her bir günün üzerine tıklandığında gerçekleşecek işlemi belirle
	days.forEach(function (day) {
		day.addEventListener("click", function () {
			// Tüm günleri seçilen sınıftan temizle
			days.forEach(function (d) {
				d.classList.remove("today");
			});

			// Tıklanan günü today sınıfıyla işaretle
			this.classList.add("today");
		});
	});
});
