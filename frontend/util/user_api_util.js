export const fetchCurrentUser = () => (
    $.ajax({
        method: "GET",
        url: "api/current_user"
    })
)