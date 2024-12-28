function updURL() {
	 event.preventDefault();
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	var url = "https://localhost:8080/";
	if (name && year) {
        // Concatenate both name and year to the URL
        url += "?name=" + name + "&year=" + year;
    } else if (name) {
        // Concatenate only name to the URL
        url += "?name=" + name;
    } else if (year) {
        // Concatenate only year to the URL
        url += "?year=" + year;
    }
	document.getElementById("url").textContent = url;
}