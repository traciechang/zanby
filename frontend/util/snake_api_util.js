// export const fetchSnakes = data => (
//     $.ajax({
//         method: "GET",
//         url: "api/snakes",
//         data
//     })
// );

export const fetchSnakes = data => {
    console.log("in snake api util")
    console.log(data)
    return ($.ajax({
        method: "GET",
        url: "api/snakes",
        data
    }))
};