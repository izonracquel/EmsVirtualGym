
function inText(str, str2){
	res = false;
	str2 = str.split("");
	for(i in str){
		if(str == str2[i]){
			res = true;
			break;
		}
	}
	return res;
}

function inArray(str, arr){
	res = false;
	for(i in arr){
		if(str == arr[i]){
			res = true;
			break;
		}
	}
	return res;
}

function inObject(str, obj){
	res = false;
	for(i in obj){
		if(str == i){
			res = true;
			break;
		}
	}
	return res;
}

function toStamp(str){
	if(inText("-", str)){
		str = str.split("-");
		dt = new Date(str[0], str[1], str[2]);
		return dt.getTime();
	}else if(inText('/', str)){
		str = str.split("/");
		dt = new Date(str[0], str[1], str[2]);
		return dt.getTime();
	}
}

function toDate(str, fmt){
	Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	Days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if(str == ''){dt = new Date();}
	else{dt = new Date(parseInt(str));}
	
	format = {
		Y : dt.getFullYear(),
		m : dt.getMonth() + 1,
		F : Months[dt.getMonth()],
		J : Days[dt.getDay()],
		d : dt.getDate(),
		w : dt.getDay(),
	}
	result = "";sfmt = fmt.split("");
	for(i in sfmt){ j = sfmt[i];if(inObject(j, format)){result += format[j];}else{result += j;}}
	return result;
}
