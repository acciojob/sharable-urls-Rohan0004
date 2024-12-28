function updURL() {
	 event.preventDefault();
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	var url = "https://localhost:8080/";
	if (name && year) {       
        url += "?name=" + name + "&year=" + year;
    } else if (name) {
        url += "?name=" + name;
    } else if (year) {
        url += "?year=" + year;
    }
	document.getElementById("url").textContent = url;
}