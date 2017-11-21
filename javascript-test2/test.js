let arr1 = [1,3,4,5,8,9,11,13,15,18,22,25,28,29,30,35];

function getRangeByArr(arr){
	if(Object.prototype.toString.call(arr).slice(8, -1) !== "Array"){
		throw new Error("param 'arr' must be an object")
	}

	if(arr.length === 0){
		return [];
	}

	let isRange = false;
	let result = String(arr[0]);

	let i = 0;
	while (arr.length > i){
		
		if(arr[i + 1]){
			if(arr[i] + 1 === arr[i + 1]){
				isRange = true;
			}else{
				result += isRange ? "-" + arr[i] + "," + arr[i + 1] : "," + arr[i + 1];
				isRange = false;
			}
		}else{
			result += isRange ? "-" + arr[i] : "";
		}

		i++;
	}

	return result;
}

console.log(getRangeByArr(arr1));

/*----------------------------------------------*/

let arr2 = [1,2,3,2,1,7,4,3,2,4,56,456,3,2,32,6,7,9,0,0,13,2,4];

function getUnic(arr){
	let hash = {};
	let keys;
	let result = [];

	for(let i = 0; arr.length > i; i++){
		
		if(hash[arr[i]] === undefined){
			hash[arr[i]] = arr[i];
		}else{
			hash[arr[i]] = false;
		}
	}

	keys = Object.keys(hash);
	
	if(keys){
		keys.forEach(function (val){
			  if(hash[val] !== false){
			  	result.push(hash[val]);
			  }
		});
	}

	return result;
}

function getUnUnic(arr){
	let hash = {};
	let hash2 = {};
	let keys;
	let result = [];

	for(let i = 0; arr.length > i; i++){
		
		if(hash[arr[i]] === undefined){
			hash[arr[i]] = arr[i];
		}else{
			hash2[arr[i]] = arr[i];
		}
	}

	keys = Object.keys(hash2);
	
	if(keys){
		return keys.map(function (val){
			  return hash2[val];
		});
	}else{
		return []
	}
}

function getSum(arr){
	if(arr.length > 0){
		return arr.reduce(function(previousValue, currentValue){
  			return previousValue + currentValue;
		});
	}else {
		return null;
	}
}

console.log(getUnic(arr2));
console.log(getUnUnic(arr2))
console.log(getSum(arr2))


/*------------------------------------------------------------*/


function getflattedObject(obj){
	if(typeof obj !== "object" || obj == null){
		throw new Error("param 'obj' must be an object")
	}

	let flattedObj = {};
	
	function iterator(obj, currentKey = ""){

		if(typeof obj === "object" && obj !== null){
			let keys = Object.keys(obj);

			keys.forEach( function(key, index){		
				iterator(obj[key], currentKey + key);
			});		
		}else{
			flattedObj[currentKey] = obj;
		}
	}

	iterator(obj);

	return flattedObj;
}

const multidimensionalObject = {
    "User": 1,
    "Data": {
        "FirstName": "Anonimoys",
        "LastName": "AnonimoysLastName",
        "MiddleName": "AnonimoysMiddleName",
        "Role": [
            1, 2, 4, {
				"isOwner" : true
			}
        ]
    },
    "Profile": [
        {
            "Check": true,
            "CheckRole": [
                1, 2, 34
            ]
        },
        {
            "Settings": {
                "Rider": [
                    1, 2, 3, 4
                ],
                "Inside": {
                    "In": true,
                    "Out": null
                }
            }
        }
    ]
};

console.log(getflattedObject(multidimensionalObject));

/*----------------------------------------------------------*/

let typesOfElements = [
	{
		key: "ELEMENT_WINDOW",
		value: 256
	},
	{
		key: "ELEMENT_SHADOW",
		value: 128
	},
	{
		key: "ELEMENT_ACTIVE",
		value: 8
	},
	{
		key: "ELEMENT_DISABLED",
		value: 4
	},
	{
		key: "ELEMENT_SECONDARY",
		value: 2
	},
	{
		key: "ELEMENT_PRIMARY",
		value: 1	
	}
];

function getTypsArrByNumber(typesOfElements, num){
	
	let filteredTypes = typesOfElements.filter(function(el){
			if(num - el.value >= 0){
				num -= el.value;
				return true;	
			}
	});

	if(num > 0 && filteredTypes.length === 0){
		return [];
	}

	return filteredTypes.map(function(type){
		return type.key;
	})
}

console.log(getTypsArrByNumber(typesOfElements, 142));