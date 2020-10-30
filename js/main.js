var myDataBase = [
    { name: "james burton", email: "james@gmail.com", age: 25 },
    { name: "mark robinson", email: "mark@gmail.com", age: 30 },
    { name: "lara barbosa", email: "larak@gmail.com", age: 22 },

];

(function Avatars(db) {


    var init = function () {
        generateList();
        enterUser();
    };


    var generateList = function () {
        var parentAvatar = document.querySelector('#parent_avatars');

        parentAvatar.innerHTML = '';

        for (let index = 0; index < db.length; index++) {
            var card = '<div class="col-sm-4">';
            card += '<div class="card">';
            card += '<div class="card-delete" data-card="' + index + '" >x</div>';
            card += '<div class="card-block"> ';
            card += '<h3 class="card-title">' + db[index].name + '</h3>';
            card += '<p class="card-text">';
            card += '<strong>Email: <span>' + db[index].email + '</span> </strong>';
            card += '</p>';
            card += '<p class="card-text">';
            card += '<strong>Age: <span>' + db[index].age + '</span> </strong>';
            card += '</p> </div> </div> </div>';
            parentAvatar.insertAdjacentHTML('beforeend', card);

        }


    };

    var enterUser = function () {
        console.log('form running');
    };








    init();

}(myDataBase));