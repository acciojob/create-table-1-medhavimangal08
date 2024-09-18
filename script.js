function insert_Row() {
    //Write your code here
	let table=document.querySelector("#sampleTable");
	let tr=table.insertRow(0);
	let cell1=tr.insertCell(0);
	let cell2=tr.insertCell(1);
	cell1.innerText="New Cell1";
	cell2.innerText="New Cell2";
		
	
  
  
}
