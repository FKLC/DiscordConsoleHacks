XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader; 

XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
    this.wrappedSetRequestHeader(header, value);
    if(header == 'Authorization') 
        console.log('Here is your auth code:', value);
}