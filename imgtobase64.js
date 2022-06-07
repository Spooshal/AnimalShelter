var slikaziv;

$(function () {

	const toBase64 = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

	$('#fileUpload').change(function () {
		const uploadedFile = document.querySelector('#fileUpload').files[0];
		if (uploadedFile.size <= 2000000) {
			toBase64(uploadedFile)
				.then(res => {
					slikaziv = res;
				})
				.catch(err => {
					console.log(err);
				})
		}
		else {
			window.alert("Photo must be under 2MB!");
			$("#fileUpload").val("");
		}

	});

});


