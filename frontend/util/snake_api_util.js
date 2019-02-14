export const fetchSnakes = data => (
    $.ajax({
        method: "GET",
        url: "api/snakes",
        data
    })
);