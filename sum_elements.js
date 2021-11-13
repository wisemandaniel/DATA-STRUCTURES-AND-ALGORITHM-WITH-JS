    function submit(){
        //getting the data from the user in the form of a string
        var array = document.getElementById('array').value;
        console.log(array);

        //converting the string into an array of numbers
        var array2 = JSON.parse("[" + array + "]");
        console.log(array2);
        
        //varriable to hold the sum of the elements
        var sum = 0;

        //Now add the elements of the given array
        for(let i in array2){
            sum += array2[i];
        }
        console.log(sum);
    }