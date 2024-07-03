// implement a function that makes multiple api calls and possess the data using callbacks
function makeAPICalls (url,callback) {
    fetch(url)
    .then(res=>res.json())
    .then(data=>callback(data))
    .catch(err=>console.log(err))
}

function handleData(data) {
    console.log(data);
}

function main () {
  const apiUrl1='https://jsonplaceholder.typicode.com/posts/1'
  const apiUrl2='https://jsonplaceholder.typicode.com/posts/2'

  makeAPICalls(apiUrl1,handleData)
  makeAPICalls(apiUrl2,handleData)
}

main()

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
