// implement a try-catch to handle error during api data fetching

const fetchData = () =>{
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>console.log(data))
    } catch (error) {
        console.log(error)
    }
}
fetchData()
