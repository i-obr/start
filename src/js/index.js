$("#fullname").suggestions({
    token: "443f948858261171188c6ac5173417561c35e1ef",
    type: "NAME",
    count: 5,
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});
