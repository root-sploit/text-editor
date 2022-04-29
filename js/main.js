let text = document.getElementById("text");
let count = 1;


text.addEventListener("keydown", (event) => {
				if (event.key == "Enter")
				{
								addNumber();
								if (count >= 25) {
												let height = text.clientHeight + 20;
												text.style.height = height + "px";
								}							
				}
				
});

function addNumber() {
				const numPara = document.createElement("P");
				numPara.innerText = count + 1;
			 numPara.classList.add("number");
				document.getElementById("line-num").appendChild(numPara);
				count++;
}

const downloadToFile = (content, filename, contentType) => {
		console.log(filename);
  const a = document.createElement("a");
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

	URL.revokeObjectURL(a.href);
};

document.querySelector("#btnSave").addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  let fileName = prompt("Enter file name: ");
  fileName = fileName.split(".")[0];
  
  downloadToFile(textArea.value, `${fileName}.txt`, "text/plain");
});
