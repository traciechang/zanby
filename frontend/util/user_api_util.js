export const fetchCurrentUser = () => (
    $.ajax({
        method: "GET",
        url: "api_current_user"
    })
)