// rewrite the previous one using promise
function makeApiCalls (url) {
    return fetch(url)
    .then(res=>res.json())
}

function handleData(data) {
    console.log("fetch data using promises",data);
}

function main () {
 const apiUrl1='https://jsonplaceholder.typicode.com/posts/1'
  const apiUrl2='https://jsonplaceholder.typicode.com/posts/2'
  makeApiCalls(apiUrl1).then(handleData).catch(err=>console.log(err))
  makeApiCalls(apiUrl2).then(handleData).catch(err=>console.log(err))
}
main()