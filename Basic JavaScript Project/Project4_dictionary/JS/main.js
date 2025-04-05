function Dictionary() { //dictionary in the making
    var Animal = {
        Species: "Cat",
        Color:"Orange",
        Breed:"Senegalese",
        Age:2,
        Sound:"Meow!"
    }
    delete Animal.Age; // deleting animal.age to appear undefined in web
    document.getElementById("Dictionary").innerHTML = Animal.Age;
}