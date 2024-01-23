export function splitParts(arr,lengthPart) { 
		let chunks = [], 
			parts = Math.floor(arr.length / lengthPart); 
			
		for(let i = 0; i < arr.length; i+=lengthPart) 
			chunks.push(arr.slice(i, i+lengthPart)); 
		
		return chunks;
	}